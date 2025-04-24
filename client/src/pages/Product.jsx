import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../context/Shopcontext";
import { assets } from "../assets/assets";
import { RelatedProducts } from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState([]);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <>
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
        {/* product info */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* product images */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full ">
              {productData.image.map((item, i) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={i}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt=""
                />
              ))}
            </div>

            {/* view image display */}
            <div className="w-full sm:w-[80%]">
              <img className="w-full" src={image} alt="" />
            </div>

            {/* product info */}
            <div className="grow">
              <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
              <div className="flex items-center gap-1 mt-2">
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className="pl-2">(122)</p>
              </div>

              <p className="mt-5 text-3xl font-medium">
                {currency}
                {productData.price}
              </p>
              <p className="mt-5 text-gray-500 md:w-4/5">
                {productData.description}
              </p>

              <div className="flex flex-col my-8 gap-4">
                <p>select size</p>
                <div className="flex gap-2">
                  {productData.sizes.map((item, i) => (
                    <button
                      onClick={() => setSize(item)}
                      className={`border py-2 px-4 ${
                        item === size
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-black"
                      }`}
                      key={i}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => addToCart(productData._id, size)}
                  className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
                >
                  ADD TO CART
                </button>
                <hr className="mt-8 sm:w-full" />

                <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                  <p>100% original product.</p>
                  <p>cash on delivery is available on this product.</p>
                  <p>Easy return and exchange policy within 7 days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* this is the review section */}

      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>

        <div className="flex flex-col gap-4 px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            consequatur placeat tenetur fugit magnam numquam deleniti magni sit!
            Officiis corporis nihil atque necessitatibus recusandae omnis
            reiciendis eveniet. Nulla laborum quas id culpa necessitatibus
            voluptate alias dolore omnis molestiae? Nam doloribus maxime unde
            officiis pariatur voluptatibus sunt et obcaecati neque eius
            accusamus dolores, nisi perspiciatis provident rerum id in!
            Corporis, molestiae.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius
            odit ducimus atque facilis inventore voluptate est laborum.
            Dignissimos, quia animi quidem cum libero nihil ipsa dolorum vitae
            numquam optio repellendus aperiam vero eveniet aspernatur tenetur
            tempora, harum ipsum voluptatem!
          </p>
        </div>
      </div>

      {/* related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />

      <div></div>
    </>
  ) : (
    <div className="opacity-0"></div>
  );
};

export { Product };
