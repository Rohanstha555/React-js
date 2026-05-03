import React from "react";
import Nav from "./components/Navbar/nav";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  
  
  return (
    <>
    <Nav />
    <Outlet />
    </>
  );
}

export default App;
