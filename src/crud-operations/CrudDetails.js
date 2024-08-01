import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export function CrudDetails() {
    const params = useParams();
    const [products, setProducts] = useState([{}]);
    // const [products, setProducts] = useState([{productId:0, name:"", price:0, stock:false}]);
    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:8080/details/${params.id}`
        }).then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>ID</dt>
                <dd>{products[0].ProductID}</dd>
                <dt>Name</dt>
                <dd>{products[0].Name}</dd>
                <dt>Price</dt>
                <dd>{products[0].Price}</dd>
                <dt>Stock</dt>
                <dd>{products[0].Stock == true ? "Available" : "Out of Stock"}</dd>
            </dl>
            <Link to="/products">Back to Products</Link>
        </div>
    );
}
