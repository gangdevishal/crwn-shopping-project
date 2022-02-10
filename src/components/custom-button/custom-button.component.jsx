import React from "react";
import './custom-button.style.scss'

const CustomButton = ({ children,googleSignInButton,inverted, ...otherButtonProps }) => {
  return (
    <button className={`${inverted ? 'inverted' : ''} ${googleSignInButton ? 'google-sign-in' : ''} custom-button`} {...otherButtonProps}>
      {children}
    </button>
  );
};

export default CustomButton;
