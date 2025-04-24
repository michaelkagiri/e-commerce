import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

const GlobalLayout = () => {
  return (
    <>
      <Toaster richColors position="top-center" />
      <Outlet />
    </>
  );
};

export { GlobalLayout };
