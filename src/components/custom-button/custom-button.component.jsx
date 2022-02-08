import React from "react";
import './custom-button.style.scss'

const CustomButton = ({ children,googleSignInButton, ...otherButtonProps }) => {
  return (
    <button className={`${googleSignInButton ? 'google-sign-in' : ''} custom-button`} {...otherButtonProps}>
      {children}
    </button>
  );
};

export default CustomButton;
