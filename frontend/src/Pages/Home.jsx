import React from "react";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import IntroSection from "../Home/IntroSection";
import FeaturesGrid from "../Home/FeatureGrid";
import WhyChooseUs from "../Home/WhyChooseUs";
import AvailableCourses from "../Home/AvailableCourses";
import SiteAnnouncements from "../Home/SiteAnnouncement";
import Footer from "../Home/Footer";

const Home = () => {
    return(
        <>
            <Header />
            <Hero />
            <IntroSection />
            <FeaturesGrid />
            <WhyChooseUs />
            <AvailableCourses />
            <SiteAnnouncements />
            <Footer />
        </>
    );
};

export default Home;