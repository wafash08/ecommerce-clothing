import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview";
import "./collections-overview.scss";

function CollectionsOverview({ collections }) {
  // for (let key in collections) {
  //   for (const alsoKey in collections[key]) {
  //     console.log(collections[key][alsoKey]);
  //   }
  // }

  // DO SOMETHING ON COLLECTIONS PROPS

  return (
    <div className='collections-overview'>
      {collections[`items`].map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
