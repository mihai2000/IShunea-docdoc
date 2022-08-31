import React from "react";
import '../Institutions.css';

export default function Laborator(props: {
                        title: string | number | boolean | React.ReactElement<any, string |
                        React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
                        address: string | number | boolean | React.ReactElement<any, string |
                        React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
                        text: string | number | boolean | React.ReactElement<any, string |
                        React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
                        img: any
                        })
    {
        const comun = {
            phoneTitle:'Programări la telefon',
            phoneNumber:'022-600-903',
            timeTitle:'Program de lucru',
            time1:'08:30 - 11:30',
            time2:'08:30 - 11:30',
            time3:'zi liberă',
            mapText:'Mărește harta'
        };
    return(
        <div className="col-md-9 Lab">
            <h1>Laboratoare:<b>2</b></h1>
            <div className="List TopList">
                    <div className="Content">
                        <div className="Item">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="Left">
                                        <a href="http://www.docdoc.md/ro/clinics/laborator-american-sectorul-botanica"
                                           className="Logo">
                                            <img
                                                src="http://www.docdoc.md/files/2022/06/24/ef5a8bbd6540c2c7fa8f840ce74504c4.160x135-fit/amc-centrul-medical-american-sectorul-botanica.png"
                                                alt="AMC Centrul Medical American, Sectorul Botanica"/>
                                        </a>
                                        <div className="Map">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d809.3057696542228!2d28.866876147073558!3d46.978005168342186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9798380266309%3A0xfa450d01b2dcda79!2sAmerican%20Medical%20Center!5e0!3m2!1sru!2sus!4v1656062277739!5m2!1sru!2sus"
                                                 className="Map">
                                            </iframe>
                                            <div className="PopupAjaxed"
                                                 data-action="http://www.docdoc.md/ro/clinics/laborator-american-sectorul-botanica?Map">
                                                {comun.mapText}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="Info">
                                        <a href="http://www.docdoc.md/ro/clinics/laborator-american-sectorul-botanica">
                                            <h2 className="Underline">{props.title}</h2>
                                        </a>
                                        <div className="Address">{props.address}</div>
                                        <p>{props.text}</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="Details">
                                        <div className="Phone">
                                            {comun.phoneTitle}
                                            <a href="tel:022600903">{comun.phoneNumber}</a>
                                        </div>
                                        <button className="Button PopupAjaxed basic-info-button"
                                                data-action="http://www.docdoc.md/ro/appointments/2/3392?ServiceId=&Price=0&Currency=MDL">Înscriere
                                        </button>
                                        <div className="Timing">
                                            <strong>{comun.timeTitle}</strong>
                                            <li>{comun.time1}</li>
                                            <li>{comun.time2}</li>
                                            <li>{comun.time3}</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
