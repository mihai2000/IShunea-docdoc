import React from "react";
import './DocInfo.css'
import iconpositions  from '../../../../assets/iconpositions.png';
import iconrating  from '../../../../assets/iconrating.png';
import iconprice from '../../../../assets/iconprice.png';

export default function DocInfo(){
    return(
        <section className="doc-info-sistem">
            <div className="container">
                <div className="row doc-info-sistem">
                    <div className="col-lg-4 col-sm-6 col-xs-12 positions">
                        <div className="doc-info-sistem__icon-block">
                            <img src={iconpositions} alt="iconpositions"/>
                                <h1>Cauți un doctor mai aproape de casă?</h1>
                        </div>
                        <h2>Caută un doctor bun mai aproape de casa ta. Indică regiunea unde locuiești, iar sistemul va
                            selecta medicii de care ai nevoie. </h2>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-xs-12 rating">
                        <div className="doc-info-sistem__icon-block">
                            <img src={iconrating} alt="iconrating"/>
                                <h1>Sistemul de rating</h1>
                        </div>
                        <h2>Toți medicii sunt evaluați după anumiți parametri care îi formează ratingul. Iar recenziile
                            și notele tale contează mult. </h2>
                    </div>
                    <div className="col-lg-4 col-sm-offset-3 col-lg-offset-0 col-sm-6 col-xs-12 price">
                        <div className="doc-info-sistem__icon-block">
                            <img src={iconprice} alt="iconprice"/>
                                <h1>Alege doctorul în funcție de prețul consultației</h1>
                        </div>
                        <h2>Pe portalul nostru, fiecare doctor are indicat prețul consultației. Poți găsi un doctor bun,
                            orientându-te la un preț convenabil.</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
