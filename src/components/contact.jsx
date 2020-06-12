import React from "react";
import ContactForm from "./contact-form";
import "../styles/contact.scss";

const Contact = () => {
    return (
        <div id="contact">
            <div className="inner-text">
                <h3>Contact</h3>
                <div className="content-container">
                    <div className="contact-form">
                        <ContactForm />
                    </div>
                    <div className="content">
                        <h4>Links</h4>
                        <div className="info">
                            <div className="resume">
                                <a
                                    href="https://github.com/elizabetheinstein/Portfolio-Site/raw/master/assets/eeinstein_resume.pdf"
                                    rel="noopener noreferrer"
                                >
                                    Resume
                                    </a>
                            </div>
                            <div className="linkedin">
                                <a
                                    href="https://www.linkedin.com/in/elizabeth-einstein"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                    </a>
                            </div>
                            <div className="github">
                                <a
                                    href="https://www.github.com/elizabetheinstein"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;
