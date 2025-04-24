import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalLayout } from "./pages/GlobalLayout.jsx";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { Dashboard } from "./pages/Dashboard";
import { Payments } from "./pages/Payments";
import { Notifications } from "./Notifications";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<App />}>
          <Route path="dashboard" element={<Dashboard token={token} />} />
          <Route path="add" element={<Add token={token} />} />
          <Route path="list" element={<List token={token} />} />
          <Route path="orders" element={<Orders token={token} />} />
          <Route path="payments" element={<Payments token={token} />} />
          <Route
            path="notifications"
            element={<Notifications token={token} />}
          />
          <Route path="/customers" element={<Orders token={token} />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
