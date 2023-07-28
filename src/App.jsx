import { useState } from "react";
import { HashRouter, Route, Routes, BrowserRouter } from "react-router-dom";
// import { routesData } from "./store/Routes";

import "./index.css";
import Header from "./Home/Header";
import Navbar from "./components/Navbar";
import Contactcard from "./Contact/Contactcard";
import MyWorks from "./Home/MyWorks";
import Footer from "./components/Footer";
import Design from "./Home/Design";
import My3DModel from "./Home/My3DModel";
import ContactForm from "./Contact/ContactForm";
import TechStack from "./Home/TechStack";
import HomePage from "./Home/HomePage";
import Modal from "./Home/Modal";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Header /> */}
      <HomePage />
      <TechStack />
      <MyWorks />
      <Contactcard />
      {/* <Footer /> */}
    </>
  );
}

export default App;
