import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import { useNavigate, Link, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"



export function CrudEdit() {
    const navigate = useNavigate();
    const params = useParams();
    const [products, setProducts] = useState([{ ProductID: 0, Name: "", Price: 0, Stock: true }]);

function HandleProductChange(e){
    setProducts(e.target.value);
    }

    useEffect(() => {
        axios({
            method: "get",
            url: `http://127.0.0.1:8080/details/${params.id}`

        }).then((response) => {
            setProducts(response.data)
            // alert("Record Updated Successfully")
            // navigate("/products")
        })
    }, [params.id])

    return (
        <div className="container-fluid">
            <h2>Update Product</h2>
            <Formik
                initialValues={{
                    ProductID: products.ProductID,
                    Name: products.Name,
                    Price: products.Price,
                    Stock: products.Stock
                }}
                // validationSchema={
                //     yup.object({
                //         Name: yup
                //             .string()
                //             .required("Name is Required"),
                //         Price: yup
                //             .number()
                //             .min(1)
                //             .required("Password is Required"),
                //         Stock: yup
                //             .boolean()
                //             .required("Stock is Required")
                //     })
                // }
                onsubmit={
                    (values) => {
                        axios({
                            method: "put",
                            url: `http://127.0.0.1:8080/updateproduct/${params.id}`,
                            data: values
                        }).then((response) => {
                            setProducts(products.Name)
                            setProducts(products.Price)
                            setProducts(products.Stock)
                            alert("Record Updated Successfully")
                            navigate("/products")
                        })
                    }}



            >
                <Form>
                    <dl>

                        <dt>Name</dt>
                        <dd><Field type="text" onChange={HandleProductChange} name="Name" value={products[0].Name} /></dd>
                        <dd className="text-danger"><ErrorMessage name="Name" /></dd>
                        <dt>Price</dt>
                        <dd><Field type="number" onChange={HandleProductChange} name="Price" value={products[0].Price} /></dd>
                        <dd className="text-danger"><ErrorMessage name="Price" /></dd>
                        <dt>Stock</dt>
                        <dd className="form-switch"><Field className="form-check-input" type="checkbox" name="Stock" checked={products[0].Stock} />Available</dd>
                        <dd className="text-danger"><ErrorMessage name="Stock" /></dd>

                    </dl>
                    <button type="submit" className="btn btn-success px-4">Save</button>
                    <Link className="ms-3" to="/products">View Products</Link>
                </Form>
            </Formik>
        </div>
    )
}