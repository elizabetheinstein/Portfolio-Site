import React from "react";
import "../styles/styles.scss";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Tech from "../components/Tech";
import Footer from "../components/Footer";

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
