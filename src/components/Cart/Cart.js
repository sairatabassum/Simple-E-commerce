import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // PROPS CHILDREN
  console.log(props.children);
  let total = 0,
    shipping = 0,
    quantity = 0;
  for (const product of cart) {
    quantity += product.quantity;
    total = total + product.quantity * product.price;
    shipping += product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const gradTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total} </p>
      <p>Total Shipping: ${shipping} </p>
      <p>Tax: {tax}</p>
      <h5>Grand Total: {gradTotal.toFixed(2)}</h5>
      {props.children}
    </div>
  );
};

export default Cart;
