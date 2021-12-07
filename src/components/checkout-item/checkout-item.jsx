import { connect } from "react-redux";

import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.action";

import "./checkout-item.scss";

function CheckoutItem({ cartItem, clearItem, addItem, removeItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <button className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </button>
        <span className='value'>{quantity}</span>
        <button className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </button>
      </span>
      <span className='price'>${price}</span>
      <button onClick={() => clearItem(cartItem)} className='remove-button'>
        &#10005;
      </button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
