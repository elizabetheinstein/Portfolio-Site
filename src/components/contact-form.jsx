import React, { useState } from "react";
import * as emailjs from "emailjs-com";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
    }

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }
    const handleEmailChange = (evt) => {
        setEmail(evt.target.value);
    }
    const handleMessageChange = (evt) => {
        setMessage(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        let templateParams = {
            from_name: email,
            to_name: "eeinstein134@gmail.com",
            subject: "Outreach from LizEinstein.com",
            message_html: message,
        };
        emailjs.send(
            "gmail",
            "template_Wv7JykYp",
            templateParams,
            process.env.USER_ID
        );

        resetForm();
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="contact" value="contact" />
                <p hidden>
                    <label>
                        <input name="bot-field" />
                    </label>
                </p>
                <div className="name-email">
                    <div className="name">
                        <label htmlFor="from_name">Name</label>
                        <input type="text" name="name" className="input-name" value={name} onChange={handleNameChange} />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="input-email" value={email} onChange={handleEmailChange} />
                    </div>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" className="input-message" value={message} onChange={handleMessageChange} />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div >
    )
}

export default ContactForm;