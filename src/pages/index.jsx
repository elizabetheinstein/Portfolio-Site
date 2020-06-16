import React from "react";
import "../styles/styles.scss";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import About from "../components/About.jsx";
import Tech from "../components/Tech.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

const IndexPage = () => (
    <div>
        <Header />
        <Banner />
        <About />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
    </div>
);

export default IndexPage;
