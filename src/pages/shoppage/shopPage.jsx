import { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionPage from "../collectionpage/collectionpage";
import CollectionsOverview from "../../components/collections-overview/collections-overview";

const ShopPage = ({ updateCollections }) => {
  const params = useParams();

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    let unsubscribeFromSnapshot;
    unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);
      updateCollections(collectionsMap);
    });

    return () => unsubscribeFromSnapshot();
  }, [updateCollections]);

  return (
    <div className='shop-page'>
      <Routes>
        <Route path='/' element={<CollectionsOverview />} />
        <Route
          path=':collectionId'
          element={<CollectionPage urlParams={params} />}
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
