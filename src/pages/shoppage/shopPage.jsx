import { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

import CollectionPage from "../collectionpage/collectionpage";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import WithSpinner from "../../components/with-spinner/with-spinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ isCollectionFetching, fetchCollectionsStartAsync }) => {
  const params = useParams();

  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

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
              isLoading={isCollectionFetching}
            />
          }
        />
      </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
