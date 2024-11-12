import MasterLayout from "../layout/MasterLayout";
import ProductDetails from "../components/product/ProductDetails";
import ProductTabs from "../components/product/ProductTab";
const Details = () => {
  return (
    <MasterLayout>
      <ProductDetails/>
      <ProductTabs/>
    </MasterLayout>
  );
};

export default Details;
