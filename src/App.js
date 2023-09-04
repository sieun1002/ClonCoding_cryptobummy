import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from "../src/pages/Home2";
import Minting from "../src/pages/Minting";
import Invite from "../src/pages/Invite";
import Cheering from "../src/pages/Cheering";
import Navbar from "../src/pages/Navbar";
import Home3 from "../src/pages/Home3";
import UserHome from "../src/pages/UserHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home2 />}>
            <Route path="/home3" element={<Home3 />}>
              <Route path=":userId" element={<UserHome />} />
            </Route>
          </Route>

          <Route path="/minting" element={<Minting />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/cheering" element={<Cheering />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
