import { useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
export function ShopperHome() {
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
    <div className="container-fluid">
      <div>
        <div className="d-flex justify-content-between">
          <div>
            <img
              src="electronics.jpg"
              style={{ width: "200px", height: "300px" }}
            />
          </div>
          <div>
            <img
              src="men's clothing.jpg"
              style={{ width: "200px", height: "300px" }}
            />
          </div>
          <div>
            <img
              src="women's clothing.jpg"
              style={{ width: "200px", height: "300px" }}
            />
          </div>
          <div>
            <img
              src="jewelery.jpg"
              style={{ width: "200px", height: "300px" }}
            />
          </div>
        </div>
        <div>
          <h4>Hello !  - {cookies["userId"]}</h4>
          <button onClick={SignoutClick} className="btn btn-link">Signout</button>
        </div>
      </div>
    </div>
  );
}
