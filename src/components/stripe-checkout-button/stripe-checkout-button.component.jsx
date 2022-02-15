import StripeCheckout from "react-stripe-checkout";

import React from "react";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KTOSWSJY3kbsVfr20j6c7myD4Y3FKTDnjY5htYArsfgjIHkT6KG6cRGuZCvyVpdBVD3IKnvLZUlnl9bGnaydmg7002vZh2rA8";
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      name="Vishal Clothing Ltd." // the pop-in header title
      description={`Your total is $${price}`} // the pop-in header subtitle
      image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
      label="Pay Now" // text inside the Stripe button
      panelLabel="Pay Now" // prepended to the amount in the bottom pay button
      amount={priceForStripe} // cents
      stripeKey={publishableKey}
      shippingAddress
      billingAddress
      allowRememberMe // "Remember Me" option (default true)
      token={onToken}
      locale="ind"
    />
  );
};

export default StripeCheckoutButton;
