import { Product } from "../database/Models/product.js";

export const getHome = async (req, res) => {
  try {
    const products = Product.find();

    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (e) {
    res.json({
      success: false,
      messsage: `Error: ${e}`,
    });
  }
};



