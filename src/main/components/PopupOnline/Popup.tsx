import React from "react";
import './Popup.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faClose} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.bundle';
import {useForm} from "@formspree/react";

function Popup() {
    const [state, handleSubmit] = useForm("xgerneeo");
    if (state.succeeded) {
        return <p>Your mail was sent succesfully</p>;
    }
    return(
        <form className="Popup" onSubmit={handleSubmit}>
            <input type="checkbox" id="check"/>
             <label className="chat-btn" htmlFor="check">
                 {/*<div className="commenting row">*/}
                     <FontAwesomeIcon className="i comment" icon={faEnvelope}/>
                     <p>Trimite-ne un mesaj!</p>
                     <FontAwesomeIcon className="i close" icon={faClose}/>
                 {/*</div>*/}
             </label>
                <div className="wrapper">
                    <div className="header text-center p-2"><h6>Trimite-ne un mesaj!</h6></div>
                    {/*<div className="text-center p-2"><span>Trimite-ne un mesaj!</span></div>*/}
                    <div className="chat-form">
                        <input type="text" className="form-control" placeholder="Name" name="name: "/>
                        <input type="text" className="form-control" placeholder="Email"name="email: " />
                        <textarea className="form-control" placeholder="Your Text Message" name="text:"></textarea>
                        <button className="btn btn-success btn-block button">Submit</button>
                    </div>
                </div>
        </form>
    );
}
export default Popup;
