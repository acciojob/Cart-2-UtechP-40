import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CartProvider from "./Context/CartContext";


// console.log();


ReactDOM.render(<CartProvider>
    <App />
</CartProvider>, document.getElementById("root"));