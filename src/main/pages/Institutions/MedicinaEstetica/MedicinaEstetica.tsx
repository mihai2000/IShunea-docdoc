import React from "react";
import '../Institutions.css';
import AMC from '../../../../images/Cosmetologie/amc-centrul-medical-american.png';
export  default function MedicinaEstetica() {
    return(
        <div className="col-md-9 Beauty">
                <h1>Medicină estetică: <b>1</b></h1>
                <div className="List TopList">
                    <div className="Content">
                        <div className="Item">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="Left">
                                        <a href="http://www.docdoc.md/ro/clinics/amc-centrul-medical-american" className="Logo">
                                            <img src={AMC} alt="AMC Centrul Medical American"/>
                                        </a>
                                        <div className="Map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.
                                            5466606454593!2d28.840609951276925!3d47.02950293555478!2m3!1f0!2f0!3f0!3m2
                                            !1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d4e83f7361d%3A0x969145cb2cebdca0!
                                            2sAmerican%20Medical%20Center!5e0!3m2!1sen!2s!4v1599119247319!5m2!1sen!2s"
                                                     className="Map"></iframe>
                                            <div className="PopupAjaxed" data-action="http://www.docdoc.md/ro/clinics/amc-centrul-medical-american?Map">Mărește harta</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="Info">
                                        <a href="http://www.docdoc.md/ro/clinics/amc-centrul-medical-american">
                                            <h2 className="Underline">AMC Centrul Medical American</h2>
                                        </a>
                                        <div className="Address">Chișinău, str. Puskin, 47/1</div>
                                        <p>American Medical Center este o clinică multidisciplinară, axată pe medicina personalizată, ce asigură cele mai moderne metode de diagnostic și tratament. Clinica AMC vine în întâmpinarea pacienților
                                            cu soluții eficiente, adaptate individual pentru orice problemă de sănătate.</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="Details">
                                        <div className="Phone">
                                            Programări la telefon
                                            <a href="tel:022600903">022-600-903</a>
                                        </div>
                                        <button className="Button PopupAjaxed basic-info-button" data-action="http://www.docdoc.md/ro/appointments/2/2930?ServiceId=&Price=0&Currency=MDL">Înscriere</button>
                                        <div className="Timing">
                                            <strong>Program de lucru</strong>
                                            <li>08:00 - 20:00</li>
                                            <li>08:00 - 14:00</li>
                                            <li>zi liberă</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Paging Hidden" data-url="http://www.docdoc.md/ro/service//Page/%%PAGE_NUMBER%%"
                             data-options="Action=Service"
                             data-current="1"
                             data-records="0"
                             data-limit="30">
                            Pagina <span className="Current">1</span> din <span className="Total">1</span>
                            <a href="http://www.docdoc.md/ro/service//Page/1" className="Button Previous Disabled"
                               data-change="-1">&lsaquo;</a>
                            <a href="http://www.docdoc.md/ro/service//Page/0" className="Button Next" data-change="1">&rsaquo;</a>
                        </div>
                    </div>
                </div>
            </div>
    );
}
