const Price = () => {
  return (
    <div className="bg-white shadow rounded p-7 divide-y mt-5 md:mt-7">
      <div>
        <h1 className="text-2xl text-slate-700">Order summary</h1>
      </div>

      <div className="pt-5 md:pt-10 ">
        <div className="space-y-4 text-lg">
          <div className="flex justify-between">
            <span>Shopping</span>
            <span>900 Tk</span>
          </div>
          <div className="flex justify-between">
            <span>Vat + Tax</span>
            <span>900 Tk</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery charge</span>
            <span>900 Tk</span>
          </div>
          <hr/>
          <div className="flex justify-between">
            <span className="text-purple-500">Grand Total</span>
            <span>900 Tk</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
