import React from "react";
import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = (props) => {
  const { cart, time } = props;
  const notify = () => toast("Wow!!!You Successfully done your task");

  let total = 0;

  let quantity = 0;
  for (const book of cart) {
    
    quantity = quantity + book.quantity;
    //   console.log(quantity);
    //   console.log(total);
    //   let time = book.quantity + book.duration
    total = total + book.duration * book.quantity;
  }

  return (
    <div>
      <h2>Mission Details</h2>
      <div className="time-count">
        <div className="exercise-time">
          <p>Exercise time </p>
          <p>{total} Minutes</p>
        </div>
        <div className="break-count">
          <p>Break time </p>
          <p>{time} Minutes</p>
        </div>
      </div>
      <br />
      <button onClick={notify} className="btn-activity">
        Activity Completed
      </button>
      <ToastContainer />
    </div>
  );
};

export default Cart;
