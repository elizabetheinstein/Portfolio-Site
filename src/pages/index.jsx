import React from "react";
import "../styles/global.scss";
import Header from "../components/header";
import Banner from "../components/banner";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Skills from "../components/skills";
import Footer from "../components/footer";

const IndexPage = () => (
    <div>
        <Header />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
);

export default IndexPage;
