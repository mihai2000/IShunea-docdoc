import React from "react";
import logo from "../../assets/docdoc-logo-retina.png";
import iconphoneheader from "../../assets/iconphoneheader.png";
import './header.css';
import $ from 'jquery';
import Inputmask from 'inputmask';
import '../../i18next/i18n';
import i18n from "i18next";
import { withNamespaces } from 'react-i18next';

// @ts-ignore
function Header({t}) {
    $(document).ready(function () {
        Inputmask().mask(document.querySelectorAll("input"));
        // $("#CallBack").focusin(function() {
        //     $("label").toggleClass( "d-none" );
        // });
        // $("input").blur(function() {
        //     $(this).toggleClass( "d-none" );
        // });
    });
    // @ts-ignore
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    $(function() {
        $("#lang a").click(function() {
            // remove classes from all
            $("#lang a").removeClass("active");
            // add class to the one we clicked
            $(this).addClass("active");
        });
    });
    const phone = () => {
        // @ts-ignore
        document.getElementById("disapear").classList.add('d-none');
        // @ts-ignore
        document.getElementById("show").classList.remove('d-none');
    }
    const text = () => {
        // @ts-ignore
        document.getElementById("disapear").classList.remove('d-none');
        // @ts-ignore
        document.getElementById("show").classList.add('d-none');
    }

    return (

        <section className="header">
            <div className="container">
                <div className="row header">
                    <div className="icon">
                        <a href="/">
                            <img src={logo} className="logo" alt="logo"/>
                        </a>
                    </div>
                    <div className="contact-info-1">
                        <div className="link-block" id="lang">
                            <a className="active" onClick={() => changeLanguage('ro')}>ro</a>
                            <a className="" onClick={() => changeLanguage('ru')}>ru</a>
                        </div>
                        <h1 className="cititle">{t('Header.Programare')}</h1>
                        <a href="tel:022600903">
                            <div className="call-now">
                                <img src={iconphoneheader} alt="iconphoneheader"/>
                                <h1>022-600-903</h1>
                            </div>
                        </a>
                        <div className="number-form">
                            <div className="CallBack" id="CallBack">
                                <label onClick={phone} id="disapear" className="number-form__callback">
                                    {t('Header.Apel')}
                                </label>
                                <div className="Form mask d-none" id="show">
                                    <input id="phoneNumber" type="text " data-masked=""
                                           data-inputmask="'mask': '+373 (99) 999-999'"
                                           placeholder="+373 (__) ___-___" className="form-control"/>
                                    <button onClick={text}> OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

// @ts-ignore
export default withNamespaces()(Header);

