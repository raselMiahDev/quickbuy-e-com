import {BrowserRouter,Routes,Route} from "react-router-dom"
import CheckOut from './page/CheckOut';
import Home from "./page/Home";
import PaymentSuccess from "./page/PaymentSuccess";
import PaymentFail from "./page/PaymentFail";

const App = () => {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<CheckOut/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/payment-success" element={<PaymentSuccess/>}/>
          <Route path="/payment-fail" element={<PaymentFail/>}/>
        </Routes>
       </BrowserRouter>
    </>
  );
};

export default App;