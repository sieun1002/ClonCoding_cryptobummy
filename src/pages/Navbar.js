import { useState, useEffect } from "react";
import "../routes/HomePage.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li id="CyptoBummy">CyptoBummy</li>
          <li id="Home">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/minting">Minting</Link>
          </li>
          <li>
            <Link to="/cheering">Cheering</Link>
          </li>
          <li>
            <Link to="invite">Invite</Link>
          </li>
        </ul>

        <ul className="userName-signUp">
          <li id="userName">sieun</li>
          <li id="SignOut">Sign out→</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
