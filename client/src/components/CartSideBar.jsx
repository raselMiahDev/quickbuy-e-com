import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const CartSideBar = ({ hideSidebar, isVisible }) => {
  const products = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-vector/building-material-heaps-set_74855-938.jpg",
      title: "Material Product",
      category: "Materials",
      price: 29.99,
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-vector/building-material-heaps-set_74855-938.jpg",
      title: "Material Product",
      category: "Materials",
      price: 29.99,
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-vector/building-material-heaps-set_74855-938.jpg",
      title: "Material Product",
      category: "Materials",
      price: 29.99,
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-vector/building-material-heaps-set_74855-938.jpg",
      title: "Material Product",
      category: "Materials",
      price: 29.99,
    },
  ];
  const totalPrice = products.reduce((price,product)=>price+product.price,0)
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-end">
      <div
        className="bg-white overflow-auto w-full sm:w-80 max-w-xs p-4 transform transition-transform duration-500 ease-in-out"
        style={{ transform: isVisible ? "translateX(0)" : "translateX(-100%)" }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button
            onClick={hideSidebar}
            className="text-gray-600 hover:text-gray-900 border p-1"
          >
            <IoMdClose size={25} />
          </button>
        </div>
        {/* Cart items go here */}
        <div className="mt-4 ">
          {products.length > 0 ? (
            products.map((product) => {
              return (
                <div key={product.id} className="flex gap-3 border-b">
                  <img src={product.image} width={80} alt="" />
                  <div>
                    <h1>{product.title}</h1>
                    <p className="text-xs">Price : {product.price}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No items in the cart.</p>
          )}
        </div>
        <div className="pt-3">
            <span>Total Price : {totalPrice} TAKA BDT</span>
        </div>
        {products.length > 0 ? (
          <div className="pt-10">
            <Link to="/check-out" className="bg-purple-600 text-white py-2 px-4">
              Checkout
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartSideBar;
