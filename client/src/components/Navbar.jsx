import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router";
import { CiMenuFries, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";
import { ShopContext } from "../context/Shopcontext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext)

  return (
    <>
      <div className="flex items-center justify-between pb-5 pt-2 font-medium">
        <Link to={"/"}>
          <img
            src={assets.primaryLogo}
            className="w-20"
            alt="kladi outfit logo"
          />
        </Link>

        {/* navbar for other screen excluding the small screen */}
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `group flex flex-col items-center gap-1 ${
                isActive ? "active" : ""
              }`
            }
          >
            <p>HOME</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 hidden group-[.active]:block" />
          </NavLink>

          <NavLink
            to={"/collection"}
            className={({ isActive }) =>
              `group flex flex-col items-center gap-1 ${
                isActive ? "active" : ""
              }`
            }
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 hidden group-[.active]:block" />
          </NavLink>

          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `group flex flex-col items-center gap-1 ${
                isActive ? "active" : ""
              }`
            }
          >
            <p>ABOUT</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 hidden group-[.active]:block" />
          </NavLink>

          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `group flex flex-col items-center gap-1 ${
                isActive ? "active" : ""
              }`
            }
          >
            <p>CONTACT</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 hidden group-[.active]:block" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          {/* search icon */}
          <CiSearch onClick={() => setShowSearch(true)} size={28} className="cursor-pointer" />

          {/* profile icon */}
          <div className="group relative">
            <CiUser size={28} className="cursor-pointer" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          {/* cart */}
          <Link to={"/cart"} className="relative">
            <CiShoppingCart size={28} className="cursor-pointer min-w-5" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          {/* humburger */}

          <CiMenuFries
            onClick={() => setVisible(true)}
            size={28}
            className="cursor-pointer sm:hidden"
          />

          {/*small screen menu  */}

          <div
            className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
              visible ? "w-full" : "w-0"
            }`}
          >
            <div className="flex flex-col text-gray-600">
              <div
                onClick={() => setVisible(false)}
                className="flex items-center gap-4 p-3 cursor-pointer"
              >
                <RiCloseLargeLine size={28} className="rotate-90" />
              </div>

              {/* navlinks */}

              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6"
                to={"/"}
              >
                HOME
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6"
                to={"/collection"}
              >
                COLLECTION
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6"
                to={"/about"}
              >
                ABOUT
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6"
                to={"/contact"}
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Navbar };
