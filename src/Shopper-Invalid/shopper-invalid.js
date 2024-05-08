import { Link } from "react-router-dom";
export function ShopperInvalid() {
    return (
        <div className="container-fluid text-danger">
            <h3>Invalid UserNmae / Password</h3>
            <div>
                <Link to="/login">Try Again</Link>
            </div>
        </div>
    );
}