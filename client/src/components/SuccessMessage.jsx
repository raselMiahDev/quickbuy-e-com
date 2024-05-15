import { FaCheckCircle } from "react-icons/fa";

const SuccessMessage = () => {
  return (
    <div className="h-screen bg-slate-100 flex items-center justify-center px-5 md:px-0">
      <div className="bg-white p-16">
        <div className="text-center">
          <div className="flex items-center gap-4 text-2xl md:text-4xl text-green-700 justify-center">
            <span>
              <FaCheckCircle />
            </span>
            <span>Payment Successful !</span>
          </div>

          <h1 className="font-bold text-lg py-3">
            Thank you ! Your payment of BDT. 2500 has been received.
          </h1>
          <p>Order ID : 254DC | Transaction ID : 12345</p>

          <div className="pt-5">
            <button className="px-7 py-1 bg-purple-800 text-white font-bold">Ok</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
