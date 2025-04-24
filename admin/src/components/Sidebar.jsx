import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowUp,
  faHouse,
  faInbox,
  faUsersLine,
  faList,
  faMoneyCheckDollar,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="w-[14%] sm:w-[14%] min-h-screen border-r-2">
      <div className="flex flex-col gap-1 text-[15px]">
        <NavLink
          className="flex items-center gap-3 px-3 py-2 sm:py-4"
          to="/dashboard"
        >
          <FontAwesomeIcon icon={faHouse} size="lg" />
          <p className="hidden md:block">Dashboard</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 px-3 py-2 sm:py-4"
          to="/add"
        >
          <FontAwesomeIcon icon={faFileArrowUp} size="lg" />
          <p className="hidden md:block">Add Product</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 px-3 py-2 sm:py-4"
          to="/list"
        >
          <FontAwesomeIcon icon={faList} size="lg" />
          <p className="hidden md:block">Products List</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 px-3 py-2 sm:py-4"
          to="/orders"
        >
          <FontAwesomeIcon icon={faMoneyCheckDollar} size="lg" />
          <p className="hidden md:block">Orders</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 px-3 py-2 sm:py-4"
          to="/payments"
        >
          <FontAwesomeIcon icon={faCreditCard} size="lg" />
          <p className="hidden md:block">Payments</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 px-3 py-2 sm:py-4"
          to="/notifications"
        >
          <FontAwesomeIcon icon={faInbox} size="lg" />
          <p className="hidden md:block">Notifications</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 px-3 py-2 sm:py-4"
          to="/customers"
        >
          <FontAwesomeIcon icon={faUsersLine} size="lg" />
          <p className="hidden md:block">Customers </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
