import React from "react";
import './Contacts.css'
import Form from "./Form/ContactForm";

const Contacts = () =>{
    return(
        <div className="contact-container">
            <div className="contact-left">
                <p className="contact-subtitle">
                    Let's connect! I'm available for projects, collaborations, and any inquiries.
                </p>

                <div className="contact-info">
                    <p><strong className={"start-row"}>Email:</strong> <a
                        href="mailto:andreagriguoli1651@gmail.com">andreagriguoli1651@gmail.com</a></p>
                    <p><strong className={"start-row"}>Phone:</strong> <a href="tel:+393286733671">+39 3286733671</a></p>
                    <p><strong className={"start-row"}>LinkedIn:</strong> <a href="https://www.linkedin.com/in/andrea-griguoli-02526433b/"
                                                     target="_blank">linkedin.com/in/andreagriguoli</a></p>
                </div>
            </div>
            <div className="contact-right">
                <Form></Form>
            </div>
        </div>


    )
}

export default Contacts