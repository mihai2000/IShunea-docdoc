import React from "react";
import '../Institutions.css';
import Pagination from "../Pagination";
import SearchComponentInstitutions from "../SearchComponent/SearchComponentInstitutions";
import AMCCentru from '../../../../images/Lab/amc-centrul-medical-american-sectorul-centru.png';
import AMCBotanica from '../../../../images/Lab/amc-centrul-medical-american-sectorul-botanica.png';

export default function Laborator(
// props: {
//     title: string | number | boolean | React.ReactElement<any, string |
//         React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
//     address: string | number | boolean | React.ReactElement<any, string |
//         React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
//     text: string | number | boolean | React.ReactElement<any, string |
//         React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
//     img: any
// })
){
    return (
        <div className="Main">
            <SearchComponentInstitutions/>
            <div className="Block">
                <div className="Clinics Section">
                    <div className="container">
                        <div className="row">
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
                                                                src={AMCCentru}
                                                                alt="AMC Centrul Medical American, Sectorul Centru"/>
                                                        </a>
                                                        <div className="Map">
                                                            <iframe
                                                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d809.3057696542228!2d28.866876147073558!3d46.978005168342186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9798380266309%3A0xfa450d01b2dcda79!2sAmerican%20Medical%20Center!5e0!3m2!1sru!2sus!4v1656062277739!5m2!1sru!2sus"
                                                                className="Map">
                                                            </iframe>
                                                            <div className="PopupAjaxed"
                                                                 data-action="http://www.docdoc.md/ro/clinics/laborator-american-sectorul-botanica?Map">
                                                                Mărește harta
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="Info">
                                                        <a href="http://www.docdoc.md/ro/clinics/laborator-american-sectorul-centru">
                                                            <h2 className="Underline">AMC Centrul Medical American, Sectorul Centru</h2>
                                                        </a>
                                                        <div className="Address">Chișinău, str. Puskin, 47/1</div>
                                                        <p>American Medical Center este o clinică multidisciplinară, axată pe medicina\n' +
                                                            'personalizată, ce asigură cele mai moderne metode de diagnostic și\n' +
                                                            'tratament. Clinica AMC vine în întâmpinarea pacienților\n' +
                                                            'cu soluții eficiente, adaptate individual pentru orice problemă de sănătate.f</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="Details">
                                                        <div className="Phone">
                                                            Programări la telefon
                                                            <a href="tel:022600903">022-600-903</a>
                                                        </div>
                                                        <button className="Button PopupAjaxed basic-info-button"
                                                                data-action="http://www.docdoc.md/ro/appointments/2/3392?ServiceId=&Price=0&Currency=MDL">Înscriere
                                                        </button>
                                                        <div className="Timing">
                                                            <strong>Program de lucru</strong>
                                                            <li>08:30 - 11:30</li>
                                                            <li>08:30 - 11:30</li>
                                                            <li>zi liberă</li>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Item">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <div className="Left">
                                                        <a href="http://www.docdoc.md/ro/clinics/laborator-american-sectorul-botanica"
                                                           className="Logo">
                                                            <img
                                                                src={AMCBotanica}
                                                                alt="AMC Centrul Medical American, Sectorul Botanica"/>
                                                        </a>
                                                        <div className="Map">
                                                            <iframe
                                                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d809.3057696542228!2d28.866876147073558!3d46.978005168342186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9798380266309%3A0xfa450d01b2dcda79!2sAmerican%20Medical%20Center!5e0!3m2!1sru!2sus!4v1656062277739!5m2!1sru!2sus"
                                                                className="Map">
                                                            </iframe>
                                                            <div className="PopupAjaxed"
                                                                 data-action="http://www.docdoc.md/ro/clinics/laborator-american-sectorul-botanica?Map">
                                                                Mărește harta
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="Info">
                                                        <a href="http://www.docdoc.md/ro/clinics/laborator-american-sectorul-botanica">
                                                            <h2 className="Underline">AMC Centrul Medical American, Sectorul Botanica</h2>
                                                        </a>
                                                        <div className="Address">Chișinău, str. Independenței, 54</div>
                                                        <p>American Medical Center este o clinică multidisciplinară, axată pe medicina\n' +
                                                            'personalizată, ce asigură cele mai moderne metode de diagnostic și\n' +
                                                            'tratament. Clinica AMC vine în întâmpinarea pacienților\n' +
                                                            'cu soluții eficiente, adaptate individual pentru orice problemă de sănătate.</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="Details">
                                                        <div className="Phone">
                                                            Programări la telefon
                                                            <a href="tel:022600903">022-600-903</a>
                                                        </div>
                                                        <button className="Button PopupAjaxed basic-info-button"
                                                                data-action="http://www.docdoc.md/ro/appointments/2/3392?ServiceId=&Price=0&Currency=MDL">Înscriere
                                                        </button>
                                                        <div className="Timing">
                                                            <strong>Program de lucru</strong>
                                                            <li>08:30 - 11:30</li>
                                                            <li>08:30 - 11:30</li>
                                                            <li>zi liberă</li>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Pagination/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="Related">
                                    <a className="sidebar-title" href="http://www.docdoc.md/ro/clinics">
                                        Diagnostic de laborator
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/ecografie">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Test PCR Covid -19 (24 ore) </h3>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <a className="sidebar-title" href="http://www.docdoc.md/ro/clinics">
                                        Domenii
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/ecografie">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Ultrasonografie </h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/tomografie-computerizata">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Tomografie computerizată </h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/radiografie">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Radiografie</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/lab">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Diagnostic de laborator</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/bronhoscopie-virtuala">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Bronhoscopie virtuală</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/densitometria-osoasa">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Densitometria osoasă</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/electrocardiografia">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Electrocardiografie (ECG)</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/ecocardiografie-ecg">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Ecocardiografie </h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/mamografie-glandele-mamare">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Mamografie </h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/endoscopie-de-diagnostic">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Investigații endoscopie de diagnostic</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/angiografie-prin-tc">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Angiografie prin TC</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/elastografia">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Elastografia</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/electroencefalografia-eeg">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Electroencefalografia (EEG)</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/monitorizare-cardiologica-holter-ecg">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Monitorizare cardiologică Holter </h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/inregistrarea-investigatiei-pe-cd">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Înregistrarea investigației pe CD</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/sonodopplerografia">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Sonodopplerografia</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/ultrasonografie-obstetrica">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Ultrasonografie obstetrică</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/ultrasonografia-musculoscheletara">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Ultrasonografia musculoscheletară</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.docdoc.md/ro/service/inregistrarea-investigatiei-pe-fotografie">
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <h3>Înregistrarea investigației pe fotografie</h3>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
