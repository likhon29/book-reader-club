import React from "react";
import "./Books.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faBookOpen} from '@fortawesome/free-solid-svg-icons'
const Books = (props) => {
    const { handleAddToCart, book } = props;
  const { id,title, author, img, page, duration } = book;
  return (
    <div className="book">
      <img src={img} alt="" />
      <div className="book-info">
        <p className="book-name">{title}</p>
              

        <p>
          <small>Author: {author}</small>
        </p>
        <p>
          <small>Pages: {page} Page</small>
        </p>
        <p>Time required: {duration} minutes</p>
          </div>
          <button className="btn-cart" onClick={()=>handleAddToCart(book)}>
          <span style={{marginRight:'5px',fontSize:'20px'}}> Want to Read</span>  <FontAwesomeIcon style={{fontSize:'20px'}} icon={faBookOpen}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Books;

