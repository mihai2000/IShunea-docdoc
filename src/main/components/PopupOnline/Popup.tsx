import React from "react";
import './Popup.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.bundle';

function Popup() {
    return(
        <form className="Popup">
            <input type="checkbox" id="check"/>
             <label className="chat-btn" htmlFor="check">
                 <div className="commenting">
                     <FontAwesomeIcon className="i comment" icon={faEnvelope}/>
                     Trimite-ne un mesaj!
                 </div>
                 {/*<FontAwesomeIcon className="i close" icon={faCircleXmark}/>*/}
             </label>
                <div className="wrapper">
                    <div className="header text-center p-2"><h6>Trimite-ne un mesaj!</h6></div>
                    {/*<div className="text-center p-2"><span>Trimite-ne un mesaj!</span></div>*/}
                    <div className="chat-form">
                        <input type="text" className="form-control" placeholder="Name"/>
                        <input type="text" className="form-control" placeholder="Email"/>
                        <textarea className="form-control" placeholder="Your Text Message"></textarea>
                        <button className="btn btn-success btn-block button">Submit</button>
                    </div>
                </div>
        </form>
    );
}
export default Popup;
