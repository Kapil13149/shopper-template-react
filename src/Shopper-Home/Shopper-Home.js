import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function ShopperHome() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div>
        <div className="d-flex justify-content-between">
          <h4>Hello ! - {cookies["userId"]}</h4>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <img
              alt="electronics"
              src="./electronics.jpg"
              style={{ width: "200px", height: "300px" }}
            />
          </div>
          <div>
            <img
              alt="men's clothing"
              src="./men's clothing.jpg"
              style={{ width: "200px", height: "300px" }}
            />
          </div>
          <div>
            <img
              alt="women's clothing"
              src="./women's clothing.jpg"
              style={{ width: "200px", height: "300px" }}
            />
          </div>
          <div>
            <img
              alt="jewellery"
              src="./Jewellery.jpg"
              style={{ width: "200px", height: "300px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
