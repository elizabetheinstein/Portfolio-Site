import { Link } from "gatsby";
import React from "react";
import "..styles/header.scss";

const Header = () => (
    <header>
        <div className="inner-header">
            <div className="logo">
                <Link to="/">Elizabeth Einstein</Link>
            </div>
            <div className="navigation">
                <nav>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="https://github.com/elizabetheinstein/Portfolio-Site/raw/master/assets/eeinstein_resume.pdf">Resume</a>
                </nav>
            </div>
        </div>
    </header>
);

export default Header;
