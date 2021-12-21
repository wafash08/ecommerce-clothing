import StripeCheckout from "react-stripe-checkout";
import logo from "../../assets/crown.svg";

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51II8FNBNQL7b5ZXwAXgfzk6hbPdRV2Sh4vm13nuTJ5SfIwUPzbkaC2YrZXl2STpK4A4yjGiNybyok5U6UVvrOjcj00uxEj2YTE";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='E-Commerce Clothing'
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
