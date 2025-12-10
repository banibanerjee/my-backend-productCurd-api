import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    razorpay_order_id: { type: String, required: false },
    razorpay_payment_id: { type: String, required: false },
    razorpay_signature: { type: String, required: false },
    expected_amount: {type: Number}, // in paise
    status: {
      type: String,
      enum: ["PENDING", "PAID"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);
const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
