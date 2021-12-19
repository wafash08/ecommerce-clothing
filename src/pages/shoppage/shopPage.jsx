import { Route, Routes, useParams } from "react-router-dom";

import CollectionPage from "../collectionpage/collectionpage";
import CollectionsOverview from "../../components/collections-overview/collections-overview";

const ShopPage = () => {
  const params = useParams();

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

export default ShopPage;
