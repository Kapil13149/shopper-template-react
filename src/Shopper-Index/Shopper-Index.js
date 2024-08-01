import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShopperHome } from "../Shopper-Home/Shopper-Home";
// import { ShopperJewelery } from "../Shopper-Jewelery.js/shopper-jewelery";
import { ShopperCategory } from "../Shopper-Category/shopper-category";
import { ShopperDetails } from "../Shopper-Details/shopper-details";
import { ShopperRegister } from "../Shopper-Register/shopper-register";
import { ShopperLogin } from "../Shopper-Login/shopper-login";
import { ShopperInvalid } from "../Shopper-Invalid/shopper-invalid";
import { CrudCreate } from "../crud-operations/crud-create";
import { CrudDetails } from "../crud-operations/crud-details";
import { CrudDelete } from "../crud-operations/crud-delete";
import { CrudEdit } from "../crud-operations/crud-edit";
import ShopperCart from "../Shopper-Cart/shopper-cart";
import './Shopper-Index.css';
import ShopperSignout from "../Shopper-Signout/shopper-signout";

export function ShopperIndex() {
  

  return (
    <div className="container-fluid" id="banner">
      <BrowserRouter>
        <header className="bg-dark text-white d-flex p-2 justify-content-between align-items-center">
          <div>
            <h1><span className="bi bi-cart"></span> Shopper.</h1>
          </div>
          <nav className="d-flex text-white">
            <div className="me-3"><Link to="home" className="btn">Home</Link></div>
            <div className="me-3"><Link to="products" className="btn">Products</Link></div>
            <div className="me-3"><Link to="register" className="btn">Register</Link></div>
            <div className="me-3"><Link to="category/men's clothing" className="btn">Men's clothing</Link></div>
            <div className="me-3"><Link to="category/women's clothing" className="btn">Women's clothing</Link></div>
            {/* <div className="me-3"><Link to="jewelery" className="btn">Jewelery</Link></div> */}
            <div className="me-3"><Link to="category/jewelery" className="btn">Jewelery</Link></div>
            <div className="me-3"><Link to="category/electronics" className="btn">Electronics</Link></div>
          </nav>
          <div>
          <ShopperSignout />
          </div>
    


          {/* <div className="d-flex">
            <span className="me-3 bi bi-search"></span>
            <span className="me-3 bi bi-person"></span>
            <span className="me-3 bi bi-heart"></span>
            <span className="me-3 bi bi-cart4"></span>
          </div> */}

        </header>
        {/* <div className="mt-2 mb-3 bg-dark text-white text-center p-1">
          HAPPY HOLIDAY DEALS ON EVERYTHING WITH SHOPPER.
        </div> */}


        <div className="">
          <Routes>
            <Route path="/" element={<ShopperHome />} />
            <Route path="home" element={<ShopperHome />} />
            {/* <Route path="jewelery" element={<ShopperJewelery />} /> */}
            <Route path="category/:catname" element={<ShopperCategory />} />
            <Route path="details/:id" element={<ShopperDetails />} />
            <Route path="register" element={<ShopperRegister />} />
            <Route path="login" element={<ShopperLogin />} />
            <Route path="invalid" element={<ShopperInvalid />} />
            <Route path="products" element={<CrudDelete />} />
            <Route path="NewProduct" element={<CrudCreate />} />
            <Route path="cruddetails/:id" element={<CrudDetails />} />
            <Route path="crudedit/:id" element={<CrudEdit />} />
          </Routes>
        </div>
          {/* <ShopperCart /> */}
      </BrowserRouter>
    </div>
  );
}
