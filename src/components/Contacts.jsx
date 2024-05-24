import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const EmailForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_vr8cwzk';
        const templateId = 'template_f2tpv5i';
        const publicKey = 'UsyG56AEGa8Ywdpuy';

        // Create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Web Wizard',
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

    return (
        <div className=' contact'>
            <div className='conttext'>
                <h1 ><c className='msg' >🤙Contact</c> me<br></br>Send me a<c className='msg' > Message</c></h1>
            </div>
            <form onSubmit={handleSubmit} className='emailForm'>
                <div className=' contat'>
                    <input
                        className='ibox'
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className='ibox'
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        className='ibox'
                        cols="30"
                        placeholder='Enter your message'
                        rows="10"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    >
                    </textarea>
                </div>
                <div className='submitbtn'>
                    <button className='send' type="submit">Send Mail</button>
                </div>
            </form>
        </div>
    )
}

export default EmailForm;