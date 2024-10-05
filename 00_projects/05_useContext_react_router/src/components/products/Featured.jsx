import React from "react";
import { Link } from "react-router-dom";
import { UseCart } from "../../utils/UseCart";

function Featured() {
  const { addToCart } = UseCart();

  const onCartClick = (product) => {
    addToCart(product);  // Add the product to the cart
  };

  const product1 = {
    id: 1,
    name: "Green Featured Item",
    price: 20,
  };

  return (
    <main className="flex gap-10">
      <Link to="/products/featured/featured-item1">
        <div className="card w-[18rem] h-[20rem] bg-orange-700 shadow-xl mt-4 rounded-xl p-4 text-center text-black ">
          Featured
        </div>
      </Link>

      <div className="relative card w-[18rem] h-[20rem] bg-purple-700 shadow-xl mt-4 rounded-xl p-4 text-center text-black ">
        Featured
        <span
          onClick={() => onCartClick({ id: 2, name: "Purple Featured Item", price: 30 })}  // Pass product details
          className="font-bold absolute bottom-5 right-5 px-4 py-1 shadow-lg cursor-pointer active:scale-95 duration-300 bg-red-500 text-white px-2 rounded-full hover:scale-105"
        >
          + cart
        </span>
      </div>

      <div className="relative card w-[18rem] h-[20rem] bg-green-700 shadow-xl mt-4 rounded-xl p-4 text-center text-black ">
        {product1.name}
        <span
          onClick={() => onCartClick(product1)}  // Add this product to the cart
          className="font-bold absolute bottom-5 right-5 px-4 py-1 shadow-lg cursor-pointer active:scale-95 duration-300 bg-red-500 text-white px-2 rounded-full hover:scale-105"
        >
          + cart
        </span>
      </div>
    </main>
  );
}

export default Featured;
