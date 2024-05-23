import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  function addToCart(e) {
    // alert(e.currentTarget.name);
    axios
      .get(`http://fakestoreapi.com/products/${e.currentTarget.name}`)
      .then((response) => {
        alert(`Added ${response.data.title} to cart`);
        cartItems.push(response.data);
        setCartItemsCount(cartItems.length);
      });
    console.log(cartItems);
    console.log(cartItemsCount);
  }
  function removeCartItem(e) {
    alert(`Remove from cart`);
    cartItems.splice(e.currentTarget.id, 1);
    setCartItemsCount(cartItems.length);
  }

  function clear() {
    alert(`clear cart`);
    setCartItems([]);
    setCartItemsCount(0);
  }

  return (
    <div className="container-fluid">
      
      <section className="mt-3 row">
        <main className="col-10 d-flex flex-wrap">
          {products.map((product) => (
            <div key={product.id} className="card m-1 p-1">
              <img src={product.image} className="card-img-top" height={150} />
              <div className="card-header">
                <p>{product.title}</p>
              </div>
              <div className="card-body">
                <dl>
                  <dt>Price</dt>
                  <dd>{product.price}</dd>
                  <dt>Rating</dt>
                  <dd>
                    <span className="bi bi-star-fill text success"></span>{" "}
                    {product.rating.rate} [{product.rating.count}]
                  </dd>
                </dl>
              </div>
              <div className="card-footer">
                <button
                  name={product.id}
                  onClick={addToCart}
                  className="btn btn-danger"
                >
                  <span className="bi bi-cart4"></span>Add to Cart
                </button>
              </div>
            </div>
          ))}
        </main>
        <div className="col-2">
          <h3>Your Cart Items</h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Preview</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.image} height={50} />
                  </td>
                  <td>
                    <button
                      name={item.id}
                      onClick={removeCartItem}
                      className="btn btn-danger"
                    >
                      <span className="bi bi-trash"></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>
                  <button onClick={clear} className="btn btn-primary">
                    Clear Cart
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </div>

    )
}

export default Cart