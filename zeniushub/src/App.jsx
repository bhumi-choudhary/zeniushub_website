import React from "react";
import {Route,Routes } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import WhatsAppFAB from "./component/WhatsAppFAB";
import ScrollToTop from "./component/ScrollToTop";
import About from "./pages/About-Us";
import Solutions from "./pages/Solutions";
import OurProcess from "./pages/Our-Process";
import Clients from "./pages/Clients";
import Contactus from "./pages/Contact-us";
import PrivacyPolicy from "./pages/Privacy-Policy";
import TermsCondition from "./pages/Terms-&-Condition";


const App = () => {


  return (
    <>
      <Header />
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About-Us" element={<About />} />
        <Route path="/Solutions" element={<Solutions/>} />
        <Route path="/Our-Process" element={<OurProcess />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Contact-us" element={<Contactus />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Terms-Condition" element={<TermsCondition />} />
        </Routes>
      <Footer />
      <WhatsAppFAB />
      <ScrollToTop />
    </>
  );
};

export default App;
