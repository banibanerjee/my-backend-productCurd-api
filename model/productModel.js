import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  details: { type: String, required: true },
  price: { type: Number, required: true },
  offerPrice: { type: Number, required: true },
  mainImage: { type: String, required: true },
  subImages: [{ type: String }]
});

export default mongoose.model("Product", productSchema);