import { v2 as cloudinary } from "cloudinary";
import { Product } from "../database/Models/product.js";

// add product

const addProduct = async (req, res) => {
  try {

    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    // Check if any image is empty or missing
    if (!image1 && !image2 && !image3 && !image4) {
      return res.status(400).json({
        success: false,
        message: "At least one image is required",
      });
    }

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        if (!item) {
          throw new Error("Empty file");
        }
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    ;

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestSeller: bestSeller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
    };

    const newProduct = new Product(productData);

    await newProduct.save();

    res.json({
      success: true,
      message: "Product added",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};



// lists product

const listProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json({
      success: true,
      data: products,
    });
  } catch (e) {

    return res.status(500).json({
      success: false,
      message: "failed!",
    });
  }
};

// remove product

 const removeProduct = async (req, res) => {

  try {
    const deletedP = await Product.findByIdAndDelete(req.body.id);

    res.status(200).json({
      success: true,
      message: "product removed",
    });
  } catch (e) {

    return res.status(500).json({
      success: false,
      message: " please try again!",
    });
  }
};
// single product info

const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const singleProduct = await Product.findById(productId);

    res.json({
      success: true,
      data: singleProduct,
    });
  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "failed!",
    });
  }
};

export { addProduct, listProducts, removeProduct, singleProduct };

// updating a product
export const updateProduct = async (req, res) => {
  const productId = req.query.id;

  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      req.body,
      { new: true }
    );

    if (!updateProduct) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (e) {

    res.status(500).json({
      success: false,
      message: "Error! please try again",
    });
  }
};

// deleting a product

export const deleteProduct = async (req, res) => {
  const productId = req.query.id;

  try {
    const deletedP = await Product.findOneAndDelete({ _id: productId });

    res.status(200).json({
      success: true,
      data: deletedP,
    });
  } catch (e) {

    return res.status(500).json({
      success: false,
      message: " please try again!",
    });
  }
};
