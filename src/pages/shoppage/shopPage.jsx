import { Outlet } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview";

const ShopPage = () => (
  <div className='shop-page'>
    <CollectionsOverview />
    <Outlet />
  </div>
);

export default ShopPage;
