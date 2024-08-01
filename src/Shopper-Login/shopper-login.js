import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
// import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export function ShopperLogin() {
    const navigate = useNavigate();
    const [cookies, setCookies, removeCookies] = useCookies(["user"]);
    return (
        <div className="container-fluid">
            <h2>User Login</h2>
            <Formik
                initialValues={{
                    UserId: "",
                    Password: "",
                }}
                onSubmit={
                    (values) => {
                        axios({
                            method: "get",
                            url: "http://127.0.0.1:8080/users",
                        })
                            .then((response) => {
                                for (var user of response.data) {
                                    if (user.UserId === values.userId && user.Password === values.password) {
                                        setCookies("userId", values.userId);
                                        navigate("/home");
                                        break;
                                    } else {
                                        navigate("/invalid");
                                    }
                                }
                            })
                    }}
            >
                {
                    <Form>
                        <dl>
                            <dt>UserId</dt>
                            <dd><Field type="text" name="userId" /></dd>

                            <dt>Password</dt>
                            <dd><Field type="password" name="password" /></dd>
                        </dl>
                        <button className="btn btn-success" type="submit">Login</button>
                        <div>
                            <Link to="/register">New User? Register</Link>
                        </div>
                    </Form>
                }

            </Formik>


        </div>
    )
}