import express from "express";
import { allProduct, singleProduct } from "../controller/productController.js"

const router = express.Router();

// GET all products
router.get("/all", allProduct);
router.get("/:id" ,singleProduct)

export default router;