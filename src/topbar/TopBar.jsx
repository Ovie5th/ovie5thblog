import React from 'react'
import "./TopBar.css"
export default function TopBar() {
    return (
        <div className = "top">
            <div className="topleft">
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-instagram"></i>
            <i className="topIcon fab fa-linkedin"></i>
            </div>
            <div className="topcenter">
                <ul className = "toplist" > 
                    <li className = "toplistItem">HOME</li>
                    <li className = "toplistItem">ABOUT</li>
                    <li className = "toplistItem">CONTACT</li>
                    <li className = "toplistItem">WRITE</li>
                    <li className = "toplistItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topright">
                <img className = "topImg" src="images/IMG_1485.JPG" alt="" />
                <i className ="topsearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
