import { useState, useEffect } from "react";
import "../routes/HomePage.css";
import { Link, Outlet } from "react-router-dom";

function Home3() {
  const id = 20210687;

  return (
    <>
      <div>Home3 입니다.</div>
      <Link to={`/Home3/${id}`}>UserHome으로 가는 링크</Link>
      <Outlet />
    </>
  );
}

export default Home3;
