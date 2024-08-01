import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export function ShopperRegister() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userError, setUserError] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/users").then((response) => {
      setUsers(response.data);
    });
  }, []);
  function VerifyUserId(e) {
    // alert(e.target.value);
    for (var user of users) {
      if (user.UserId === e.target.value) {
        setUserError("UserId Already Exist - Please Try Another");
        break;
      } else {
        setUserError("");
      }
    }
  }
  return (
    <div className="container-fluid">
      <h3>Register User</h3>
      <Formik
        initialValues={{
          UserId: "",
          UserName: "",
          Password: "",
          Email: "",
          Age: 0,
          Mobile: "",
        }}
        validationSchema={yup.object({
          userId: yup.string().required("UserId is required"),

          userName: yup.string().required("UserName is required"),

          password: yup
            .string()
            .required("Password is required")
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              "Must Contain 8 Characters,1 Uppercase,1 Lowercase,1 Number and 1 Special Character"
            )
            .min(8),

          email: yup.string().email("Invalid email address"),

          age: yup.number().required("Age is required"),

          mobile: yup
            .string()
            .required("Mobile is required")
            .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/),
        })}
        onSubmit={(values) => {
          axios({
            method: "post",
            url: "http://127.0.0.1:8080/register",
            data: values,
          }).then((response) => {
            alert("Register Successfully..");
            navigate("/login");
          });
        }}
      >
        {
          <Form>
            <dl>
              <dt>UserId</dt>
              <dd>
                <Field type="text" onKeyUp={VerifyUserId} name="userId" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="userId" />
              </dd>
              <dd className="text-danger">{userError}</dd>

              <dt>UserName</dt>
              <dd>
                <Field type="text" name="userName" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="userName" />
              </dd>

              <dt>Password</dt>
              <dd>
                <Field type="password" name="password" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="password" />
              </dd>

              <dt>Email</dt>
              <dd>
                <Field type="text" name="email" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="email" />
              </dd>

              <dt>Age</dt>
              <dd>
                <Field type="number" name="age" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="age" />
              </dd>

              <dt>Mobile</dt>
              <dd>
                <Field type="text" name="mobile" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="mobile" />
              </dd>
            </dl>
            <button className="btn btn-primary" type="submit">
              Register
            </button>
            <div className="mt-3">
              Already have an account ? <a href="/login">Login</a>
            </div>
          </Form>
        }
      </Formik>
    </div>
  );
}
