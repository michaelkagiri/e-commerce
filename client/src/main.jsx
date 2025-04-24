import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Cart } from "./pages/Cart.jsx";
import { Login } from "./pages/Login.jsx";
import { Orders } from "./pages/Orders.jsx";
import { PlaceOrder } from "./pages/PlaceOrder.jsx";
import { Product } from "./pages/Product.jsx";
import { Collection } from "./pages/Collection.jsx";
import { Contact } from "./pages/Contact.jsx";
import { ShopContextProvider } from "./context/Shopcontext.jsx";
import { GlobalLayout } from "./pages/GlobalLayout.jsx";
import { ScrollToTop } from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ShopContextProvider>
        <Routes>
          <Route element={<GlobalLayout />}>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="collection" element={<Collection />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              <Route path="orders" element={<Orders />} />
              <Route path="placeorders" element={<PlaceOrder />} />
              <Route path="product/:productId" element={<Product />} />
            </Route>
          </Route>
        </Routes>
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>
);
