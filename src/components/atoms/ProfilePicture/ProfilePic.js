import React from 'react'
import './ProfilePic.css'
const ProfilePic = (props) => {
    return (
        <div className="image-container">
            <img src={props.imageName} alt={props.altText} />
        </div>
    )
}

export default ProfilePic