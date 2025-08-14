import React from "react";
import Header from "./about/Header";
import Hero from "./about/Hero";
import KeyFeatures from "./about/KeyFeatures";
import CTABanner from "./about/CTA_Banner";
import Footer from "./about/Footer";

function About(){
    return(
        <>
    <div className="bg-dark-background text-white font-sans">
        <Header/>
            <main>
                <Hero/>
                <KeyFeatures />
                <CTABanner/>
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default About;