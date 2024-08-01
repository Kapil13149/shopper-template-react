import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const ShoppingCart = () => {
  
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  function Loadcategories() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        response.data.unshift("all");
        setCategories(response.data);
      });
  }
  function LoadProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      });
  }
  
  useEffect(() => {
    Loadcategories();
    LoadProducts("http://fakestoreapi.com/products");
  }, []);

  function categoryChanged(e) {
    if (e.target.value == "all") {
      LoadProducts("http://fakestoreapi.com/products");
    } else {
      LoadProducts(
        `http://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
  }
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
      <header className="bg-dark d-flex justify-content-between text-white text-center p-2">
        <div>
          <h2>
            <span className="bi bi-cart"></span> Shopper.
          </h2>
        </div>
        <nav className="d-flex">
          <div className="me-3">
            <Link to="home" className="btn">
              Home
            </Link>
          </div>
          <div className="me-3">
            <Link to="products" className="btn">
              Products
            </Link>
          </div>
          <div className="me-3">
            <Link to="register" className="btn">
              Register
            </Link>
          </div>
          <div className="me-3">
            <Link to="category/men's clothing" className="btn">
              Men's clothing
            </Link>
          </div>
          <div className="me-3">
            <Link to="category/women's clothing" className="btn">
              Women's clothing
            </Link>
          </div>
          <div className="me-3">
            <Link to="jewelery" className="btn">
              Jewelery
            </Link>
          </div>
          <div className="me-3">
            <Link to="category/jewelery" className="btn">
              Jewelery
            </Link>
          </div>
          <div className="me-3">
            <Link to="category/electronics" className="btn">
              Electronics
            </Link>
          </div>
        </nav>
        <div>
          <button className="btn btn-danger position-relative">
            <span className="bi bi-cart4"></span> Your Cart Items
            <span className="badge rounded-circle bg-primary position-absolute">
              {cartItemsCount}
            </span>
          </button>
        </div>
      </header>
      <section className="mt-3 row">
        <main className="col-8 d-flex flex-wrap">
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
    );
};

export default ShoppingCart;
