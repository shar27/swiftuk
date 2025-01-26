import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import Landlords from './screens/Landlords.jsx';
import DynamicPage from "./components/DynamicPage.jsx";
import Commercial from '../src/screens/Commercial.jsx'
import ThankYou from "./screens/ThankYou.jsx";

export default function App() {
  return (
    <Router>
      <>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
        </Helmet>
        
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landlords" element={<Landlords />} />
          <Route path=":commercial" element={<Commercial/>}/>
          <Route path=":slug" element={<DynamicPage/>}/>
          <Route path="thankyou" element={<ThankYou/>}/>
        </Routes>
      </>
    </Router>
  );
}