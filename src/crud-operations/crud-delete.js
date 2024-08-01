import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export function CrudDelete() {
    const [products, setProducts] = useState([]);
    const nevigate = useNavigate();

    useEffect(() => {
        axios({
            method: "get",
            url: "http://127.0.0.1:8080/products"  

        })
            .then((response) => {
                setProducts(response.data);
            })
    }, []);

    function DeleteClick(e) {
        // alert(e.currentTarget.value);
        var flag = window.confirm("Are you sure? \n you want to delete?");
        if (flag === true) {
            axios({
                method: 'delete',
                url: `http://127.0.0.1:8080/deleteproduct/${parseInt(e.currentTarget.value)}`
            })
            alert("Product Deleted");
            nevigate("/home");
        }
    }

    return (
        <div className="container-fluid">
            <h2>Products Details</h2>
            <div className="mb-3 mt-3">
                <Link to="/NewProduct"
                    className="btn btn-primary">
                    Add New Product
                </Link>
            </div>
            <table className="table table-hover table-sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product.id}>
                                <td>{product.ProductID}</td>
                                <td>{product.Name}</td>

                                <td>
                                    <Link to={'/cruddetails/' + product.ProductID}
                                        className="btn btn-outline-info" >
                                        <span className="bi bi-eye"></span>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={"/crudedit/" + product.ProductID}
                                        className="btn btn-outline-warning">
                                        <span className="bi bi-pencil"></span>
                                    </Link>
                                </td>
                                <td>
                                    <button to="/DeleteProduct" value={product.ProductID}
                                        className="btn btn-outline-danger" onClick={DeleteClick}>
                                        <span className="bi bi-trash"></span>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}