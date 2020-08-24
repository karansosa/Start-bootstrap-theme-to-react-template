import React from "react";
import styles from "./assets/styles.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import Contact from "./ContactSection";


const App = () =>
{
    return(
        <div> 
            <Navbar />
            <HeroSection />
            <PortfolioSection />
            <AboutSection />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;