import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Books from "../Books/Books";
import Break from "../Break/Break";
import Cart from "../Cart/Cart";

import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import "./Main.css";

const Main = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = books.find((book) => book.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [books]);
    
  useEffect(() => {
    localStorage.setItem('break-time', time);
  }, [time]);
    
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    // const newCart = [...cart, selectedProduct];
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  const handleBreakTime = (breakTime) => {
    setTime(breakTime);
  };
  return (
    <div className="main-container">
      <div className="books-container">
        <Header></Header>
        <div className="book-container">
          {books.map((book) => (
            <Books
              book={book}
              key={book.id}
              handleAddToCart={handleAddToCart}
            ></Books>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Profile></Profile>
        <Break handleBreakTime={handleBreakTime}></Break>
        <Cart cart={cart} time={time}></Cart>
      </div>
    </div>
  );
};

export default Main;
