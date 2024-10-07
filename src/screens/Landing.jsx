import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Reviews from "../components/Sections/Reviews";
import Blog from "../components/Sections/Blog";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
   {/* trustpilot, this is my website
    */}
      <TopNavbar />
      <Header />
      <Reviews/>
      <Services />
      
      {/* <Projects /> */}
     
      <Contact />
      <Footer />
    </>
  );
}


