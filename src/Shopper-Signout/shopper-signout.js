import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import './shopper.signout.css'

import { Dropdown } from "react-bootstrap";

const ShopperSignout = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies["userId"]) {
      navigate("/login");
    }
  }, []);
  const SignoutClick = () => {
    removeCookie("userId");
    navigate("/login");
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {cookies["userId"]}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/login" onClick={SignoutClick} className="signout p-2 text-center">
          Sign out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ShopperSignout;
