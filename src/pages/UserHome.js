import { useState, useEffect } from "react";
import "../routes/HomePage.css";
import { useParams, useLocation } from "react-router-dom";

function UserHome() {
  const { userId } = useParams();
  const location = useLocation();
  return (
    <>
      <div>UserHome 입니다.</div>
      <div>{userId}</div>
      <div>{location.pathname}</div>
    </>
  );
}

export default UserHome;
