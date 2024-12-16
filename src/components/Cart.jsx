import React from "react";
import { useCart } from "../Context/CartContext";
const items = [
  {
    id: 1,
    title: "Samsung Galaxy S7",
    price: 599.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",
    amount: 1,
  },
  {
    id: 2,
    title: "google pixel ",
    price: 499.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",
    amount: 1,
  },
  {
    id: 3,
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",
    amount: 1,
  },
];

function Cart() {
  const { cartCount, setCartCount, price, setPrice } = useCart();
  return (
    <div>
      {items.map((item) => {
        return (
          <div>
            <div>
              <img
                style={{ width: "100px", height: "60px" }}
                src={item.img}
                alt=""
              />
            </div>
            <div>{item.title}</div>
            <div>{item.id}</div>
            <div>{item.amount}</div>
            <div>{item.price}</div>
            <button
              onClick={() => {
                setCartCount(cartCount + 1);
                setPrice(price+item.price)
              }}
            >
              Increase
            </button>
            <button
              onClick={() => {
                setCartCount(cartCount - 1);
                setPrice(price-item.price)
              }}
            >
              Decrease
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
