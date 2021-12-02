import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button";
import { addItem } from "../../redux/cart/cart.action";

import "./collection-item.scss";

function CollectionItem({ item, addItem }) {
  const { imageUrl, name, price } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton inverted={true} onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
