import { instance } from "../index.js";
import crypto from "crypto";
import  Payment  from "../model/paymentModel.js";

export const paymentVerification = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ success: false, message: "Missing payment fields" });
  }

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return res.status(400).json({ success: false, message: "Invalid signature" });
  }

  // ✅ Fetch original payment record
  const paymentRecord = await Payment.findOne({ razorpay_order_id });

  if (!paymentRecord) {
    return res.status(404).json({ success: false, message: "Payment record not found" });
  }

  // ✅ Verify actual amount charged from Razorpay
  const actualOrder = await instance.orders.fetch(razorpay_order_id);

  if (actualOrder.amount !== paymentRecord.expected_amount) {
    return res.status(400).json({ success: false, message: "Amount mismatch. Payment incomplete." });
  }

  // ✅ Mark order as successful
  paymentRecord.razorpay_payment_id = razorpay_payment_id;
  paymentRecord.razorpay_signature = razorpay_signature;
  paymentRecord.status = "PAID";
  await paymentRecord.save();

  // ⏩ Redirect to frontend with confirmation
  res.redirect("http://localhost:3000/paymentsuccess");
};


export const checkout = async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // paise
      currency: "INR",
      receipt: "receipt#1",
    };

    const order = await instance.orders.create(options);

    // ✅ Save expected amount and order ID
    await Payment.create({
      razorpay_order_id: order.id,
      expected_amount: options.amount, // in paise
      status: "PENDING",
    });

    res.json({ order });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
};

// export const paymentVerification1 = async (req, res) => {
//   const {
//     razorpay_order_id,
//     razorpay_payment_id,
//     razorpay_signature,
//   } = req.body;
//   if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
//     return res.status(400).json({ success: false, message: "Missing payment fields" });
//   }
//   const body = razorpay_order_id + "|" + razorpay_payment_id;

//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
//     .update(body)
//     .digest("hex");

//   const isValid = expectedSignature === razorpay_signature;

//   if (isValid) {
//     // Optional: Save to DB
//     await Payment.create({
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//     });

//     res.redirect("http://localhost:3000/paymentsuccess"); // or send success
//   } else {
//     res.status(400).json({ success: false, message: "Payment verification failed" });
//   }
// };
// export const checkout = async (req, res) => {
//   try {
//     const { amount } = req.body;

//     const options = {
//       amount: amount * 100, // paise
//       currency: "INR",
//       receipt: "receipt#1",
//     };

//     const order = await instance.orders.create(options);
//     res.json({ order });
//   } catch (error) {
//     console.error("Error creating Razorpay order:", error);
//     res.status(500).json({ error: 'Failed to create order' });
//   }
// }

// export const paymentVerification = async (req, res) => {
//   const amount = req.body.amount;

//   try {
//       const order = await razorpay.orders.create({
//           amount: amount * 100,  // amount in paisa
//           currency: "INR",
//           receipt: "receipt#1",
//           payment_capture: 1
//       });
//       res.status(200).json({ order });
//   } catch (err) {
//       res.status(500).send("Something went wrong");
//   }
// }