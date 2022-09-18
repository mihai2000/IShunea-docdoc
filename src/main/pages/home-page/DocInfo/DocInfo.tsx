import React from "react";
import './DocInfo.css'
import iconpositions from '../../../../assets/iconpositions.png';
import iconrating from '../../../../assets/iconrating.png';
import iconprice from '../../../../assets/iconprice.png';
import '../../../../i18next/i18n';
import { withNamespaces } from 'react-i18next';
//@ts-ignore
function DocInfo({t}) {
    return (
        <section className="doc-info-sistem">
            <div className="container">
                <div className="row doc-info-sistem">
                    <div className="col-lg-4 col-sm-6 col-sm-12 .col-xs-12 positions">
                        <div className="doc-info-sistem__icon-block">
                            <img src={iconpositions} alt="iconpositions"/>
                            <h1>{t('DocInfo.location.title')}</h1>
                        </div>
                        <h2>{t('DocInfo.location.text')}</h2>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-sm-12 .col-xs-12 rating">
                        <div className="doc-info-sistem__icon-block">
                            <img src={iconrating} alt="iconrating"/>
                            <h1>{t('DocInfo.rating.title')}</h1>
                        </div>
                        <h2>{t('DocInfo.rating.text')}</h2>
                    </div>
                    <div className="col-lg-4 col-sm-offset-3 col-lg-offset-0 col-sm-6 col-sm-12 .col-xs-12 price">
                        <div className="doc-info-sistem__icon-block">
                            <img src={iconprice} alt="iconprice"/>
                            <h1>{t('DocInfo.pret.title')}</h1>
                        </div>
                        <h2>{t('DocInfo.pret.text')}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
// @ts-ignore
export default withNamespaces()(DocInfo)
