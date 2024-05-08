import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ShopperDetails } from "../Shopper-Details/shopper-details";
import { useCookies, Cookies } from "react-cookie";
import './Shopper-Category.css';
export function ShopperCategory() {
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!cookies["userId"]) {
            navigate("/login");
        }
        axios({
            method: "get",
            url: `https://fakestoreapi.com/products/category/${params.catname}`,
        }).then((response) => {
            setProducts(response.data);
        });
    }, [params.catname]);
    const SignoutClick = () => {
        removeCookie("userId");
        navigate("/login");
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2>Shopper Category {params.catname} - {cookies["userId"]}
                    </h2>
                    <button onClick={SignoutClick} className="btn btn-link">Signout</button>

                </div>
                <div className="d-flex flex-wrap">
                    {
                        products.map((product) => (
                            <div className="card m-2 p-2" style={{ width: "200px" }}>
                                <img src={product.image} height={"150px"} className="card-img-top" />
                                <div className="card-header" style={{ height: "150px" }}>
                                    <p>{product.title}</p>
                                </div>
                                <div className="card-footer">
                                    <Link to={'/details/' + product.id} className="btn btn-primary w-100">Details</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}