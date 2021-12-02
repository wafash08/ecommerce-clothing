import CustomButton from "../custom-button/custom-button";

import "./cart-dropdown.scss";

export default function CartDropdown() {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}
