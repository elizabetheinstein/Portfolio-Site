import React from "react";
import "../styles/styles.scss";
import Header from "../components/header";
import Banner from "../components/banner";
import About from "../components/about";
import Tech from "../components/tech";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";
import SEO from '../components/seo';

const IndexPage = () => (
    <div>
        <SEO title="Elizabeth Einstein | Portfolio" />
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
