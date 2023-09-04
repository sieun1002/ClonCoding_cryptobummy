import { useState, useEffect } from "react";
import "./Home.css";
import bummy1 from "../img/bummy1.png";

function Home() {
  return (
    <>
      <nav>
        <ul>
          <li id="GlobalTalk">GlobalTalk</li>
          <li>Main</li>
          <li>Guide</li>
          <li>Statistics</li>
          <li>Games</li>
        </ul>

        <ul className="login-signUp">
          <li id="Login">Login→</li>
          <li id="SignUp">Sign Up</li>
        </ul>
      </nav>

      <main>
        <p id="main-p1">E-COURSE PLATFORM</p>
        <p id="main-p2">
          Learning and <br />
          teaching online, <br />
          made easy.
        </p>
        <p id="main-p3">
          Gain subject certifivation or earn money <br />
          while teaching online with GlobalTalk.
        </p>

        <ul id="main-ul1">
          <li id="main-SignIn">Sign In→</li>
          <li id="main-LearnMore">Learn more→</li>
        </ul>
        <ul id="main-ul2">
          <li id="main-ul2-li1">
            <span>700+</span> <br /> Hours of content
          </li>
          <li id="main-ul2-li2">
            <span>575k+</span> <br /> Active Users
          </li>
        </ul>

        <img id="bummy1" src={bummy1} alt="bummy1" />
      </main>
    </>
  );
}

export default Home;
