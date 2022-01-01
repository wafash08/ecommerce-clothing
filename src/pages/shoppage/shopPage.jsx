import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionPage from "../collectionpage/collectionpage";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import WithSpinner from "../../components/with-spinner/with-spinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ updateCollections }) => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setIsLoading(false);
    });
  }, [updateCollections]);

  return (
    <div className='shop-page'>
      <Routes>
        <Route
          path='/'
          element={<CollectionsOverviewWithSpinner isLoading={isLoading} />}
        />
        <Route
          path=':collectionId'
          element={
            <CollectionPageWithSpinner
              urlParams={params}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
