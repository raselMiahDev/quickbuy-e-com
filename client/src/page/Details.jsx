import MasterLayout from "../layout/MasterLayout";
import ProductDetails from "../components/product/ProductDetails";
import ProductTabs from "../components/product/ProductTab";
import OrderNowButton from "../components/product/OrderNowButton";
const Details = () => {
  return (
    <MasterLayout>
      <ProductDetails/>
      <ProductTabs/>
      <OrderNowButton/>
    </MasterLayout>
  );
};

export default Details;
