import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Session from "./session";
import Signin from "./signin";
import Signout from "./signup";
import Jewellery from "./jewellery";
import Electronics from "./electronics";
import Menclothing from "./mencloth";
import Womenclothing from "./womencloth";
import Product from "./product";
import Tableproduct from "./tableproduct";
import Cart from "./card";
import Footer from "./footer";
import Deals from "./deals";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Session />}>
          <Route index element={<Product />} />
          <Route path="sign-in" element={<Signin />} />
          <Route path="sign-out" element={<Signout />} />
          <Route path="tableproduct" element={<Tableproduct />} />
          <Route path="deals" element={<Deals />} />
          <Route path="cart/:id" element={<Cart />} />
          <Route path="jewellery" element={<Jewellery />} />
          <Route path="Electronics" element={<Electronics />} />
          <Route path="Men's clothing" element={<Menclothing />} />
          <Route path="Women's clothing" element={<Womenclothing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
