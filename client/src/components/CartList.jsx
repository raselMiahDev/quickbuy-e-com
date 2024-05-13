import React, { useState } from "react";

const CartList = () => {
  const [conunt, setCount] = useState(0);

  const incrimentHandle = () => {
    setCount(conunt + 1);
  };
  const decrimentHandle = () => {
    setCount(conunt - 1);
  };
  return (
    <div className="bg-white shadow rounded p-7 divide-y">
      <div>
        <h1 className="text-2xl text-slate-700">Cart List</h1>
      </div>

      <div className="pt-5 md:pt-10 divide-y">
        <div className="md:flex items-center justify-between py-3">
          <div>
            <img
              width={100}
              src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/know-how/hero/SS-KH_HandToolsBusinessesShouldHave_KH-HRO.jpg"
              alt="image"
            />
          </div>
          <div className="py-5 md:py-0">
            <h1 className="text-lg text-slate-700">
              Hardware Tools Hardware ToolsHardware ToolsHardware
            </h1>
          </div>

          <div className="flex items-center gap-8 border border-purple-400 rounded-xl text-xl md:w-38 w-32">
            <button onClick={decrimentHandle} className="text-white bg-purple-600 p-2 rounded-l-lg">
              -
            </button>

            <span>{conunt}</span>
            <button onClick={incrimentHandle} className="text-white bg-purple-600 p-2 rounded-r-lg">
              +
            </button>
          </div>
        </div>

        <div className="md:flex items-center justify-between">
          <div>
            <img
              width={100}
              src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/know-how/hero/SS-KH_HandToolsBusinessesShouldHave_KH-HRO.jpg"
              alt="image"
            />
          </div>
          <div className="py-5 md:py-0">
            <h1 className="text-lg text-slate-700">
              Hardware Tools Hardware ToolsHardware ToolsHardware
            </h1>
          </div>

          <div className="flex items-center gap-8 border border-purple-400 rounded-xl text-xl md:w-38 w-32">
            <button onClick={decrimentHandle} className="text-white bg-purple-600 p-2 rounded-l-lg">
              -
            </button>

            <span>{conunt}</span>
            <button onClick={incrimentHandle} className="text-white bg-purple-600 p-2 rounded-r-lg">
              +
            </button>
          </div>
        </div>

        <div className="md:flex items-center justify-between">
          <div>
            <img
              width={100}
              src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/know-how/hero/SS-KH_HandToolsBusinessesShouldHave_KH-HRO.jpg"
              alt="image"
            />
          </div>
          <div className="py-5 md:py-0">
            <h1 className="text-lg text-slate-700">
              Hardware Tools Hardware ToolsHardware ToolsHardware
            </h1>
          </div>

          <div className="flex items-center gap-8 border border-purple-400 rounded-xl text-xl md:w-38 w-32">
            <button onClick={decrimentHandle} className="text-white bg-purple-600 p-2 rounded-l-lg">
              -
            </button>

            <span>{conunt}</span>
            <button onClick={incrimentHandle} className="text-white bg-purple-600 p-2 rounded-r-lg">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
