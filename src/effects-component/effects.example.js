import { useEffect, useState } from "react";

export function Login() {
    useEffect(() => {
        alert("Login Component Requested and will Mount");
        return() => (
            alert("Login Component Unmounted")
        );
    }, []);
    return (
        <div>
            <h2>User Login</h2>
            <hr />
        </div>
    );
}

export function Register() {
    useEffect(() => {
        alert("Register Component Requested and will Mount");
        return() => (
            alert("Register Component Unmounted")
        );
    }, []);
    return (
        <div >
            <h2>Register New User</h2>
            <hr />
        </div>
    );
}


export function EffectsComponent() {
    const [component, setComponent] = useState('');

    function LoginClick() {
        setComponent(<Login />);
    }
    function RegisterClick() {
        setComponent(<Register />);
    }
    return (
        <div className="container-fluid mt-3">
            <button onClick={LoginClick}>Login</button>
            <button onClick={RegisterClick}S>Register</button>
            <hr />
            {component}
        </div>
    );
}