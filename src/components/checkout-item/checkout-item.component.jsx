import React from "react";
import { connect } from "react-redux";
import {
  addCartItem,
  clearItemFromCart,
  removeCartItem,
} from "../../redux/cart/cart.action";
import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(removeCartItem(cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addCartItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(null)(CheckoutItem);
