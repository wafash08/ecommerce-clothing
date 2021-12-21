import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button";
import { addItem } from "../../redux/cart/cart.action";
import {
  CollectionItemContainer,
  CollectionFooter,
  Name,
  Price,
} from "./collection-item.styled";

function CollectionItem({ item, addItem }) {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </CollectionFooter>
      <CustomButton inverted={true} onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </CollectionItemContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
