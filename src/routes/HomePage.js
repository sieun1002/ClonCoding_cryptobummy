import { useState, useEffect } from "react";
import "./HomePage.css";
import bummy1_1 from "../img/bummy1_1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import Home2 from "../pages/Home2";
import Minting from "../pages/Minting";
import Cheering from "../pages/Cheering";
import Invite from "../pages/Invite";

function HomePage() {
  return (
    <>
      {/*
      <nav>
        <ul>
          <li id="CyptoBummy">CyptoBummy</li>
          <li id="Home">Home</li>
          <li>Minting</li>
          <li>Cheering</li>
          <li>Invite</li>
        </ul>

        <ul className="userName-signUp">
          <li id="userName">sieun</li>
          <li id="SignOut">Sign out→</li>
        </ul>
      </nav>

      <main>
        <div className="main1">
          <p id="CryptoBummy">CryptoBummy</p>
          <p id="main1_p2">
            "CryptoKitty"를 클론코딩한 블록체인 기반 게임입니다. 사용자는 <br />
            자신만의 버미를 만들 수 있습니다. 또한, "Cheering"을 통하여 새<br />
            로운 버미를 만들 수도 있습니다.
          </p>
          <img id="bummy1_1" src={bummy1_1} />
        </div>

        <div className="main2">
          <img id="img2" src={img2} />
          <div id="main2_text">
            <p id="main2_p1">Minting</p>
            <p id="main2_p2">버미 민팅하기</p>
            <div id="main2_divBox">
              <div id="main2_div1">Mint</div>
              <div id="main2_div2">My Bummy</div>
            </div>
          </div>
        </div>

        <div className="main3">
          <div id="main3_text">
            <p id="main3_p1">Cheering</p>
            <p id="main3_p2">새로운 버미를 불러오기 위하여 응원하기</p>
            <div id="main3_div1">TextBook→</div>
          </div>
          <img id="img3" src={img3} />
        </div>

        <div className="main4">
          <img id="img4" src={img4} />
          <div id="main4_text">
            <p id="main4_p1">
              Invite Other <br /> Bummy
            </p>
            <p id="main4_p2">응원을 성공했을 때 새로운 버미를 불러오기</p>
            <div id="main4_div1">Statisicst</div>
          </div>
        </div>
      </main>
  */}

      <nav>
        <ul>
          <li id="CyptoBummy">CyptoBummy</li>
          <li id="Home">Home</li>
          <li>Minting</li>
          <li>Cheering</li>
          <li>Invite</li>
        </ul>

        <ul className="userName-signUp">
          <li id="userName">sieun</li>
          <li id="SignOut">Sign out→</li>
        </ul>
      </nav>
      <Home2 />
      <Minting />
      <Cheering />
      <Invite />
    </>
  );
}

export default HomePage;
