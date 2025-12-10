import User from "../model/userModel.js";

// ✅ Register controller
export const register = async (req, res) => {
  const { name, phno, password, email, address, pincode } = req.body;

  if (!name || !phno || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ phno });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this phone number" });
    }

    const newUser = new User({ name, phno, password, email, address, pincode });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Login controller (with cookie)
export const login = async (req, res) => {
  const { phno, password } = req.body;

  if (!phno || !password) {
    return res.status(400).json({ message: "Phone number and password are required" });
  }

  try {
    const user = await User.findOne({ phno });

    if (!user) {
      return res.status(404).json({ message: "User not found" }); // 👈 NEW: clearer for unknown users
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" }); // 👈 different message
    }

    res.cookie("userToken", user._id, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000 // 1 week
    });

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// ✅ Logout controller (clear cookie)
export const logout = (req, res) => {
  res.clearCookie("userToken", {
    httpOnly: true,
    secure: false,  // set true in production
    sameSite: "lax"
  });

  res.status(200).json({ message: "Logged out successfully" });
};

export const getProfile = async (req, res) => {
  const userId = req.cookies.userToken;
  if (!userId) return res.status(401).json({ message: "Not authenticated" });

  try {
    const user = await User.findById(userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};