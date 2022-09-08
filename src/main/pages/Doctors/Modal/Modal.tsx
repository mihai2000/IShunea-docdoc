import React from "react";
import  './Modal.css'
export default function ModalBody(){
    return(
        <div className="contact-section">
            <h1>Contact Us</h1>
            <div className="border"></div>
            <form action="http://localhost:3000/Doctors" method="post" className="contact-form">
                <input
                    type="text"
                    className="contact-form-text"
                    placeholder="Your name"
                    name="yourname"
                    required
                />
                <input
                    type="email"
                    className="contact-form-text"
                    placeholder="Your email"
                    name="youremail"
                    required
                />
                <input
                    type="text"
                    className="contact-form-text"
                    name="yoursubject"
                    placeholder="Subject"
                    required
                />
                <textarea
                    className="contact-form-message"
                    placeholder="Your message"
                    name="yourmessage"
                ></textarea>
                <input
                    type="submit"
                    id="form-submit"
                    className="contact-form-btn"
                    value="Send"
                    required
                />
            </form>
        </div>
         );
 }
