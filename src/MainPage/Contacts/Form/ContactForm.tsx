import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// tipi per i dati del modulo
interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Funzione per inviare il modulo
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData)

        // Invio dell'email tramite EmailJS
        emailjs
            .send(
                'service_f39qy8d',
                'template_xfb4q7d',
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    user_message: formData.message,
                },
                'SFDemTdnTP1L9dpZt'
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setStatus('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                    setStatus("")
                },
                (error) => {
                    console.log('FAILED...', error);
                    setStatus('There was an error. Please try again later.');
                }
            );
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Send me a message</h3>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                required
            ></textarea>
            <button type="submit">Send</button>
            {status && <p className="status-message">{status}</p>}
        </form>
    );
};

export default ContactForm;
