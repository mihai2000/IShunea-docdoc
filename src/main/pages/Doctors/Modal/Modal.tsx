import React from "react";
import './Modal.css'
import $ from "jquery";
import Inputmask from "inputmask";
import {useForm, ValidationError} from '@formspree/react';

export default function ModalBody() {
    $(document).ready(function () {
        Inputmask().mask(document.querySelectorAll("input"));
    });
    const [state, handleSubmit] = useForm("xgerneeo");
    if (state.succeeded) {
        return <p>Your mail was sent succesfully</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                className="contact-form-text"
                placeholder="Your name"
                name="your name"
                required
            />
            <input
                id="email"
                type="email"
                placeholder="someone.example@gmail.com"
                name="your email"
                required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <input
                id="phoneNumber"
                type="tel "
                data-masked=""
                data-inputmask="'mask': '099999999'"
                placeholder="0________"
                className="contact-form-number"
                name="your phone-number"
                required
            />
            <input
                id="Year"
                type="text"
                data-masked=""
                data-inputmask="'mask': '9999'"
                placeholder="____"
                className="contact-form-year"
                name="your B.year"
                required
            />
            <input
                type="text"
                name="your subject"
                placeholder="Subject"
                required
            />
            <textarea
                id="message"
                placeholder="Your message"
                name="your message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Trimite
            </button>
        </form>
    );
}

function App() {
    return (
        <div>
            <ModalBody/>
        </div>
    );
}
