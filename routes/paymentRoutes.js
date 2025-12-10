import express from "express";
import {
  checkout,
  paymentVerification,
} from "../controller/paymentController.js";


const router = express.Router();

router.route("/checkout").post(checkout);
router.get("/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);


router.route("/paymentverification").post(paymentVerification);

export default router;