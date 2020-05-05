import { Link } from "gatsby";
import React from "react";

const Header = () => (
    <header>
        <div className="container">
            <div className="inner-header">
                <div className="logo">
                    <Link to="/">Elizabeth Einstein</Link>
                </div>
                <div className="navigation">
                    <nav>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
