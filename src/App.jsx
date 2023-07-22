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

function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        {routesData?.map((e) => {
          return <Route path={e?.path} element={e?.element} />;
        })}
      </Routes> */}
      <Header />
      {/* <Design /> */}
      <MyWorks />
      <Contactcard />
      {/* <My3DModel /> */}
      {/* <ContactForm /> */}
      <Footer />
    </>
  );
}

export default App;
