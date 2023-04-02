import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, price, seller, ratings, img } = props.product;
  const { handleAddToCart } = props;
  return (
    <div className="product">
      <img src={img} alt="Shoe" />

      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings} start</small>
        </p>
      </div>
      <button
        className="btn-cart"
        onClick={() => handleAddToCart(props.product)}
      >
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
