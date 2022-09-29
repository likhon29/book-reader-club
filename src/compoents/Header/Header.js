import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faBook,faBookOpenReader} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className="header">
          
            <div className="header-logo">
            <FontAwesomeIcon style={{ fontSize: '60px',marginRight:'10px' }} icon={faBook}></FontAwesomeIcon> 
            <FontAwesomeIcon style={{ fontSize: '60px',marginRight:'10px' }} icon={faBookOpenReader}></FontAwesomeIcon> 
             <h1>Book Reader Club</h1>
            </div>
            <h3>Select today's Mission</h3>
        </div>
    );
};

export default Header;