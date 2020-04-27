import React from "react";
import "../styles/styles.scss";
import Header from "../components/header";
import Banner from "../components/banner";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

const IndexPage = () => (
    <div>
        <Header />
        <Banner />
        <About />
        <Projects />
        <Contact />
    </div>
);

export default IndexPage;
