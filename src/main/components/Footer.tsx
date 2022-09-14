import React from "react";
import './footer.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";
import logofooter from '../../assets/logofooter.png';

function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="row footer">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 icon-block-footer">
                        <img src={logofooter} alt="logofooter" className="logofooter"/>
                        <h1>
                            Prin sistemul nostru online, procesul de căutare și programare a unei consultații
                            medicale se desfășoară în timp real, eficient, accesibil și rapid. Pacienții au
                            acces mult mai ușor la cei mai buni profesioniști din domeniul sănătății și la
                            datele activității
                            lor.
                        </h1>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12 link-block-footer">
                        <h1>Navigare</h1>
                        <ul>
                            <li><Link to="/Despre">Despre docdoc.md</Link></li>
                            <li><Link to="/TermeniSiCoditii">Termeni și condiții</Link></li>
                            <li><Link to="/FAQ">Întrebări frecvente</Link></li>
                            <li><Link to="/Rating">Despre rating</Link></li>
                            <li><Link to="/Publicitate">Publicitate online</Link></li>
                            <li><Link to="/Contacte">Contacte</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12 link-block-footer">
                        <h1>Link-uri</h1>
                        <ul>
                            <li><a href="/Boli" className="Diseases">Ghid de boli</a></li>
                            <li><a href="/Biblioteca" className="Library">Biblioteca medicală</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12 link-block-footer">
                        <h1>Social Media</h1>
                        <ul className="social-media-block">
                            <li>
                                <a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/Docdoc.md">
                                    <FontAwesomeIcon className="facebook" icon={faFacebook}></FontAwesomeIcon>
                                </a>
                            </li>
                            <li>
                                <a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/docdoc.md/?hl=ro">
                                    <FontAwesomeIcon className="instagram" icon={faInstagram}></FontAwesomeIcon>
                                </a>
                            </li>
                            <li>
                                <a target={"_blank"} rel="noreferrer"
                                   href="https://www.youtube.com/channel/UCH3nKaYugxThhwhwuymMkiw/videos?view_as=subscriber">
                                    <FontAwesomeIcon className="youtube" icon={faYoutube}></FontAwesomeIcon>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12 sign-in-block link-block-footer">
                        <h1>Doctori și clinici</h1>
                        <ul>
                            <li><a href="/ContulMeu">Cabinetul meu</a></li>
                            <li><a href="/Inregistrare">Înregistrare</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Footer;
