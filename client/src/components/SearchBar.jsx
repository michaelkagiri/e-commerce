import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch, filterProducts } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <>
      <div className="bg-gray-50 text-center">
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none bg-inherit text-sm"
            type="text"
            placeholder="search"
          />

          <img
            onClick={() => setShowSearch(false)}
            className="w-3 inline cursor-pointer"
            src={assets.cross_icon}
            alt=""
          />
        </div>
      </div>
    </>
  ) : null;
};

export { SearchBar };
