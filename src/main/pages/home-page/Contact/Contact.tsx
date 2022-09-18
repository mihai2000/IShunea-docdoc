import React from "react";
import iconphonewhite from '../../../../assets/iconphonewhite.png';
import './Contact.css';
import '../../../../i18next/i18n';
import { withNamespaces } from 'react-i18next';
//@ts-ignore
function Contact({t}) {
    return (
        <section className="program-medic">
            <div className="container">
                <div className="row program-medic">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <h1>{t('Contacte.Text1')}</h1>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="phone-nr2">
                            <a href="tel:022600903">
                                <h1>0(22)-600-903</h1>
                                <img src={iconphonewhite} alt="iconphonewhite"/>
                            </a>
                            <span>{t('Contacte.Text2')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
// @ts-ignore
export default withNamespaces()(Contact)
