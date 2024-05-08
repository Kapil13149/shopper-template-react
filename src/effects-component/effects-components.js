import { useEffect, useState } from "react";

export function ShoppingCart(props) {

    return (
        <div className="container m-4 p-4">
            <span className="bi bi-cart4"></span> {props.count}
        </div>
    );
}


export function EffectsComponent() {
    const [count, setCount] = useState(0);

    function AddClick() {
        var c = count + 1;
        alert("Item Added to cart");
        setCount(c);
        console.log(c);
    }
    return (
        <div className="container-fluid mt-3">
            <div className="position-absolute top-0 end-0">
                <ShoppingCart count={count} />
            </div>
            <div>
                <button onClick={AddClick}>Add to cart</button>
            </div>
        </div>
    );
}