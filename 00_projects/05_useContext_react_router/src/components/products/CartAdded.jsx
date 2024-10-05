import React from "react";
import { UseCart } from "../../utils/UseCart";

function CartAdded() {
  const { cart } = UseCart();  // Get the cart array from the context

  return (
    <div>
      <h2>Cart Items:</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartAdded;
