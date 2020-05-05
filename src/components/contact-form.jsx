import React, { useState } from 'react';
import * as emailjs from 'emailjs-com'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const resetForm = () => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    const handleNameChange = (evt) => {
        setName(evt.target.value)
    }
    const handleEmailChange = (evt) => {
        setEmail(evt.target.value)
    }
    const handleSubjectChange = (evt) => {
        setSubject(evt.target.value)
    }
    const handleMessageChange = (evt) => {
        setMessage(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        let templateParams = {
            from_name: email,
            to_name: 'eeinstein134@gmail.com',
            subject: subject,
            message_html: message,
        }
        emailjs.send(
            'gmail',
            'template_Wv7JykYp',
            templateParams,
            process.env.USER_ID
        )


        resetForm()
    }

    return (
        <div className='form-container'>
            <h4>Get in Touch</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor='from_name'>Name</label>
                <input type='text' name='name' value={name} onChange={handleNameChange} />
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' value={email} onChange={handleEmailChange} />
                <label htmlFor="subject">Subject</label>
                <input type='text' name='subject' value={subject} onChange={handleSubjectChange} />
                <label htmlFor="subject">Message</label>
                <input type='text' name='message' value={message} onChange={handleMessageChange} />

                <button type='submit'>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;