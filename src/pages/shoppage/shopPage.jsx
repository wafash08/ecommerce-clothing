import { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selector";

import CollectionPage from "../collectionpage/collectionpage";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import WithSpinner from "../../components/with-spinner/with-spinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
  isCollectionFetching,
  fetchCollectionsStart,
  isCollectionsLoaded,
}) => {
  const params = useParams();

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Routes>
        <Route
          path='/'
          element={
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} />
          }
        />
        <Route
          path=':collectionId'
          element={
            <CollectionPageWithSpinner
              urlParams={params}
              isLoading={!isCollectionsLoaded}
            />
          }
        />
      </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
