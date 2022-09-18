import React from "react";
import './footer.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";
import logofooter from '../../assets/logofooter.png';
import '../../i18next/i18n';
import { withNamespaces } from 'react-i18next';
//@ts-ignore
function Footer({t}) {
    return (
        <section className="footer">
            <div className="container">
                <div className="row footer">
                    <div className="col-lg-4 icon-block-footer">
                        <img src={logofooter} alt="logofooter" className="logofooter"/>
                        <h1>
                            {t('Footer.FooterText')}
                        </h1>
                    </div>
                    <div className="col-md-3 col-lg-2 link-block-footer">
                        <h1>{t('Footer.Navigare.NavText')}</h1>
                        <ul>
                            <li><Link to="/Despre">{t('Footer.Navigare.Despre')}</Link></li>
                            <li><Link to="/TermeniSiCoditii">{t('Footer.Navigare.TermeniConditii')}</Link></li>
                            <li><Link to="/FAQ">{t('Footer.Navigare.FAQ')}</Link></li>
                            <li><Link to="/Rating">{t('Footer.Navigare.Rating')}</Link></li>
                            <li><Link to="/Publicitate">{t('Footer.Navigare.Publicitate')}</Link></li>
                            <li><Link to="/Contacte">{t('Footer.Navigare.Contacte')}</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-lg-2 link-block-footer">
                        <h1>{t('Footer.Link-uri.LinkText')}</h1>
                        <ul>
                            <li><a href="/Boli" className="Diseases">{t('Footer.Link-uri.GhidBoli')}</a></li>
                            <li><a href="/Biblioteca" className="Library">{t('Footer.Link-uri.Biblioteca')}</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-lg-2 link-block-footer">
                        <h1>{t('Footer.SocialMedia.SocialText')}</h1>
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
                    <div className="col-md-3 col-lg-2 sign-in-block link-block-footer">
                        <h1>{t('Footer.DoctoriClinici.DocText')}</h1>
                        <ul>
                            <li><a href="/ContulMeu">{t('Footer.DoctoriClinici.CabinetulMeu')}</a></li>
                            <li><a href="/Inregistrare">{t('Footer.DoctoriClinici.Inregistrare')}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}

// @ts-ignore
export default withNamespaces()(Footer);
