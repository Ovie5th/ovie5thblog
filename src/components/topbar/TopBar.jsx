import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";
export default function TopBar() {
  const isLoggedIn = true;
  return (
    <div className="top">
      <div className="topleft">
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-instagram"></i>
        <i className="topIcon fab fa-linkedin"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <Link className="toplistItem" to="/">
            HOME
          </Link>
          <Link className="toplistItem" to="/about">
            ABOUT
          </Link>
          <Link className="toplistItem" to="/contact">
            CONTACT
          </Link>
          <Link className="toplistItem" to="/write">
            WRITE
          </Link>
          {isLoggedIn ? (
            <Link className="toplistItem" to="/logout">
              LOGOUT
            </Link>
          ) : (
            <Link className="toplistItem" to="/login">
              LOGIN
            </Link>
          )}
        </ul>
      </div>
      <div className="topright">
        {isLoggedIn ? (
          <img className="topImg" src="images/IMG_1485.JPG" alt="" />
        ) : (
          ""
        )}
        <i className="topsearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
