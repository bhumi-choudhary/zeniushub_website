import React from "react";
import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import WhatsAppFAB from "./component/WhatsAppFAB";
import ScrollToTop from "./component/ScrollToTop";
import RouteScrollToTop from "./component/RouteScrollToTop";

import Solutions from "./pages/Solutions";
import OurProcess from "./pages/Our-Process";
import Clients from "./pages/Clients";
import Contactus from "./pages/Contact-us";
import PrivacyPolicy from "./pages/Privacy-Policy";
import TermsCondition from "./pages/Terms-&-Condition";

import About from "./pages/About-us-child/About-Us";
import WhoWeAre from "./pages/About-us-child/Who-We-Are";
import WhatWeDo from "./pages/About-us-child/What-We-Do";
import WhyChooseUs from "./pages/About-us-child/Why-Choose-Us";
import Support from "./pages/Support";
import Talk from "./pages/Talk-To-Us";
import How from "./pages/How-To-Use";
import HelpFeedback from "./pages/Help-Feedback";


const App = () => {


  return (
    <>
      <RouteScrollToTop behavior="smooth" />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About-Us" element={<About />} />
        <Route path="/About-Us/Who-We-Are" element={<WhoWeAre />} />
        <Route path="/About-Us/What-We-Do" element={<WhatWeDo />} />
        <Route path="/About-Us/Why-Choose-Us" element={<WhyChooseUs />} />
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/Our-Process" element={<OurProcess />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Contact-us" element={<Contactus />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Terms-Condition" element={<TermsCondition />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Talk-To-Us" element={<Talk />} />
        <Route path="/How-To-Use" element={<How />} />
        <Route path="/Help-Feedback" element={<HelpFeedback />} />
      </Routes>
      <Footer />
      <WhatsAppFAB />
      <ScrollToTop />
    </>
  );
};

export default App;
