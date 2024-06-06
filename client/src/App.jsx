import {BrowserRouter,Routes,Route} from "react-router-dom"
import CheckOut from './page/CheckOut';
import Home from "./page/Home";
import PaymentSuccess from "./page/PaymentSuccess";
import PaymentFail from "./page/PaymentFail";
import Details from "./page/Details";

const App = () => {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/check-out" element={<CheckOut/>}/>
          <Route path="/payment-success" element={<PaymentSuccess/>}/>
          <Route path="/payment-fail" element={<PaymentFail/>}/>
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
       </BrowserRouter>
    </>
  );
};

export default App;