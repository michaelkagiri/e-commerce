import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";
import { Title } from "./Title";
import { ProductCard } from "./ProductCard";

const Bestseller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSellers(bestProduct.slice(0, 5));
  }, []);
  return (
    <>
      <div className="my-10">
        <div className="text-center text-3xl py-8">
          <Title text1={"BEST"} text2={"SELLER"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            dolor sapiente corporis unde et ipsam quae quod commodi dolorem
            deserunt
          </p>
        </div>

        {/* bestseller products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {bestSellers.map((item, index) =>(
                <ProductCard key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))}
        </div>
      </div>
    </>
  );
};

export { Bestseller };
