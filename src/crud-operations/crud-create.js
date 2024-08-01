import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toBeChecked } from "@testing-library/jest-dom/matchers";

export function CrudCreate() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [style, setStyle] = useState({});
    const [idError, setIdError] = useState("");

    useEffect(() => {
        axios({
            method: "get",
            url: "http://127.0.0.1:8080/products"
        }).then((response) => {
            setProducts(response.data);
        })
    }, []);

    function VerifyProductId(e) {
        // alert(e.target.value);
        var id = parseInt(e.target.value);
        for (var product of products) {
            if (product.ProductID === id) {
                setIdError("ProductId Taken - Please Try Another");
                setStyle("text-danger");
                break;
            } else {
                setIdError("ProductId is Available");
                setStyle("text-success");
            }
        }
    }

    return (
        <div className="container-fluid">
            <h2>Add New Product</h2>
            <Formik
                initialValues={{
                    ProductID: 0,
                    Name: "",
                    Price: 0,
                    Stock: false
                }}
                validationSchema={
                    yup.object({
                        ProductID: yup
                            .number()
                            .required("ID is Required")
                            .min(1),
                        Name: yup
                            .string()
                            .required("Name is Required"),
                        Price: yup
                            .number()
                            .min(1)
                            .required("Required"),
                        Stock: yup
                            .boolean()
                    })
                }
                onSubmit={
                    (values) => {
                        axios({
                            method: "post",
                            url: "http://127.0.0.1:8080/addproducts",
                            data: values
                        }).then((response) => {
                            setProducts([...products, response.data]);
                            alert("Product Added");
                            navigate("/products");
                        })
                    }
                }
            >
                {
                    <Form>
                        <dl>
                            <dt>ProductID</dt>
                            <dd>
                                <Field type="number" name="ProductID" onKeyUp={VerifyProductId} />
                            </dd>
                            <dd className={style}>{idError}</dd>
                            <dd className="text-danger">{<ErrorMessage name="ProductID" />}</dd>

                            <dt>Name</dt>
                            <dd>
                                <Field type="text" name="Name" />
                            </dd>
                            <dd className="text-danger">{<ErrorMessage name="Name" />}</dd>

                            <dt>Price</dt>
                            <dd>
                                <Field type="number" name="Price" />
                            </dd>
                            <dd className="text-danger">{<ErrorMessage name="Price" />}</dd>

                            <dt>Stock</dt>
                            <dd className="form-switch">
                                <Field className="form-check-input" type="checkbox" name="Stock" />Available
                            </dd>
                            <dd className="text-danger"><ErrorMessage name="Stock" /></dd>

                        </dl>
                        <button className="btn btn-primary" >Add Product</button>
                        <Link to="/products" className="ms-2">View Products</Link>
                    </Form>
                }
            </Formik>
        </div>
    );
}