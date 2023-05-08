import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToDb, deleteShoppingCart } from "../../utilities/fakedb";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";

const Shop = () => {
  // From json file
  const [products, setProducts] = useProducts();

  // From LocalStorage
  const [cart, setCart] = useCart(products);

  const handleAddToCart = (SelectedProduct) => {
    let newCart = [];
    const exist = cart.find((product) => product.id === SelectedProduct.id);
    if (!exist) {
      SelectedProduct.quantity = 1;
      newCart = [...cart, SelectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== SelectedProduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    addToDb(SelectedProduct.id);
    // console.log(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/orders">
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
