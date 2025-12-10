import Product from "../model/productModel.js"

  export const singleProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) return res.json(product);
      res.status(404).json({ message: 'Product not found' });
    } catch (err) {
      res.status(400).json({ message: 'Invalid product ID' });
    }
  };
      
  // productController.js
// export const allProduct = async (req, res) => {
//   try {
//     const search = req.query.search || "";
//     const products = await Product.find({
//       name: { $regex: search, $options: "i" }, // case-insensitive search
//     });
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: "Server Error", error: err.message });
//   }
// };

export const allProduct = ( async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: "Server Error", error: err.message });
    }
  });

  export const searchProducts = async (req, res) => {
    try {
      const { q } = req.query;
      
      if (!q || q.trim() === '') {
        return res.json([]);
      }
  
      // Create case-insensitive search regex
      const searchRegex = new RegExp(q.trim(), 'i');
      
      // Search in title and details fields
      const products = await Product.find({
        $or: [
          { title: { $regex: searchRegex } },
          { details: { $regex: searchRegex } },
          { category: { $regex: searchRegex } }
        ]
      }).limit(10); // Limit results for performance
      
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: "Search error", error: err.message });
    }
  };
  