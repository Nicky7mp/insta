import React from 'react';
import './Stories.css'



const Profile = (props) => {
    return (
        <div className="profile">
            <div>
                <img id="profilePic" src={props.profilePic} alt="Profile Pic"/>
            </div>
            <div id="nameAndTimeStamp">
                <div id="profileName">
                    <h5>{props.profileName}</h5>
                </div>
                <div id="timeStamp">
                    <p>{props.timeStamp}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;