import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item";
import { CollectionPageContainer, Title, Items } from "./collectionpage.styled";

function CollectionPage({ collection }) {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <Items>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPageContainer>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.urlParams[`*`])(state),
});

export default connect(mapStateToProps)(CollectionPage);
