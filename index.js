import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"; 
import productRoutes from "./routes/productRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js"
import Razorpay from "razorpay";
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';

dotenv.config();
const PORT = process.env.PORT || 9000;

const app = express();
app.use(express.json()); 
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


app.use(bodyParser.urlencoded({ extended: true }));
mongoose
  .connect(process.env.MONGO_URI , {useNewUrlParser: true,
    useUnifiedTopology: true}
  )
  .then(() => console.log("✅ Database Connected Successfully"))
  .catch((error) => console.log("❌ Database not connected", error));

app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api", paymentRoutes);

app.get('/api/getkey', (req, res) => {
  res.json({ key: process.env.RAZORPAY_API_KEY});
});


export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});
// instance.orders.create({
//   amount: 1000,
//   currency: 'INR',
//   receipt: 'receipt#1',
// }, (err, order) => {
//   console.log(err || order);
// });


app.listen(PORT, () => {
  console.log(`🚀 Server listening on PORT ${PORT}`);
});
