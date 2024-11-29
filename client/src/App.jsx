import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CheckOut from "./page/CheckOut";
import Home from "./page/Home";
import PaymentSuccess from "./page/PaymentSuccess";
import PaymentFail from "./page/PaymentFail";
import Details from "./page/Details";
import UserProfile from "./page/UserProfile";
import AllProduct from "./page/AllProduct";
import Loader from "./components/product/Loader";
import { useEffect, useState } from "react";

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // Show the loader when location changes

    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 500ms
    }, 300);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [location]); // Dependency on location changes

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check-out" element={<CheckOut />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-fail" element={<PaymentFail />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/all-products" element={<AllProduct />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
