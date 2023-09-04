import { useState, useEffect } from "react";
import "../routes/HomePage.css";
import { Link, Outlet } from "react-router-dom";
import "../api/getData.js";
import getDataAPI from "../api/getData";

function Home2() {
  async function getData() {
    const res = await getDataAPI.getPosts();
    console.log(res);
  }
  return (
    <>
      <div className="main1">
        <Link to="/home3">Home3</Link>
        <Outlet />
        <p id="CryptoBummy">CryptoBummy</p>
        <p id="main1_p2">
          "CryptoKitty"를 클론코딩한 블록체인 기반 게임입니다. 사용자는 <br />
          자신만의 버미를 만들 수 있습니다. 또한, "Cheering"을 통하여 새<br />
          로운 버미를 만들 수도 있습니다.
        </p>
      </div>
      <button onClick={() => getData()}>getData</button>
    </>
  );
}

export default Home2;
