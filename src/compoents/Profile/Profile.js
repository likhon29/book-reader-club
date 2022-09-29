import React from 'react';
import me from '../../assets/images/me.png'
import './Profile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
const Profile = () => {
    return (
        <div>
            <div className="profile-info">
                <div className="img-container">
                <img src={me} alt="" />
                </div>
                <div className="profile-name">
                    <h4>Abdur Rouf Likhon</h4>
                 
                    <div className="location">
                    <FontAwesomeIcon style={{ fontSize: '30px', margin: '10px' }} icon={faLocationDot}></FontAwesomeIcon> 
                    <p>Jahangirnagar University</p>
                   </div>
                </div>
            </div>
            <div className="additional-info">
                <div className="info">
                <p>75kg</p>
                <p>Weight</p>
                </div>
                <div className="info">
                <p>75kg</p>
                <p>Weight</p>
                </div>
                <div className="info">
                <p>75kg</p>
                <p>Weight</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;