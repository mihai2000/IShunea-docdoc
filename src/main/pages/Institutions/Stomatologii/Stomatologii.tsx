import React from "react";
import '../Institutions.css';
import Domenii from "../Domenii";
import Pagination from "../Pagination";
import SearchComponentInstitutions from "../SearchComponent/SearchComponentInstitutions";

export default function Stomatologii() {
    return (
        <div className="Main">
            <div className="Block">
                <div className="Clinics Section">
                    <SearchComponentInstitutions/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 Dental">
                                <h1>Stomatologii: <b>1</b></h1>
                                <div className="List TopList">
                                    <div className="Content">
                                        <div className="Item">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <div className="Left">
                                                        <a href="http://www.docdoc.md/ro/clinics/drgrossu"
                                                           className="Logo">
                                                            <img
                                                                title="Grosu"
                                                                src="http://www.docdoc.md/files/2015/10/22/55b0fe0da3dcf0291dc646a8a1ddea6d.160x135-fit/dr-grossu-clinica-stomatologica.png"
                                                                alt="Dr.Grossu Clinică stomatologică"/>
                                                        </a>
                                                        <div className="Map">
                                                            <iframe
                                                                title="Map"
                                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.69029782332!2d28.793084015535428!3d47.02668383585058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97ddd77e68d55%3A0x42cd0b143e1cf1a2!2zUGlhyJthIFVuaXJpaSBQcmluY2lwYXRlbG9yIDMsIENoacWfaW7Eg3UgMjA2NCwg0JzQvtC70LTQvtCy0LA!5e0!3m2!1sru!2s!4v1445499594817"
                                                                className="Map"></iframe>
                                                            <div className="PopupAjaxed"
                                                                 data-action="http://www.docdoc.md/ro/clinics/drgrossu?Map">Mărește
                                                                harta
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="Info">
                                                        <a href="http://www.docdoc.md/ro/clinics/drgrossu">
                                                            <h2 className="Underline">Dr.Grossu Clinică
                                                                stomatologică</h2>
                                                        </a>
                                                        <div className="Address">Chișinău, str. Piața Unirii, 3</div>
                                                        <p>Centrul stomatologic Dr. Grossu este un concept original în
                                                            peisajul stomatologic privat din municipiul Chişinău, foarte
                                                            bine cunoscut în toată Moldova dar și peste hotarele ei, în
                                                            special Italia,
                                                            Romania, Rusia, Belgia, Franţa şi Canada. Acest centru de
                                                            zâmbete frumoase, unde visele se împlinesc, iar tradiţia
                                                            pentru frumos îmbinată cu inovaţii formează un simbioz
                                                            perfect, îţi oferă satisfacţie,
                                                            bucurie, tratamente stomatologice moderne, complexe şi
                                                            durabile.

                                                            Motoul echipei noastre este terapia fară durere, prin
                                                            respectarea celor mai înalte standarde de calitate şi
                                                            profesionalism. Iar acestea sunt rezultatul unei fuziuni
                                                            între tehnologia de ultima
                                                            oră, serviciile medicale de excepţie, vasta experienţă a
                                                            medicilor şi nu în ultimul rînd respectul față de pacient.

                                                            Centrul a luat fiinţă din iniţiativa fraţilor Grossu –
                                                            medici stomatologi, cu scopul de a schimba percepţia
                                                            generală asupra vizitelor la stomatolog şi de a oferi
                                                            pacientului cel mai bun,
                                                            gentil şi eficient tratament din toate punctele de vedere.
                                                            Centrul Dr. Grossu prestează pacienților o gamă variată de
                                                            servicii medicale specializate de înaltă calitate cu o
                                                            echipă de medici dedicaţi
                                                            în terapie, chirurgie şi implantologie dentară, pediatrie,
                                                            ortodonţie, protetică şi endodonţie.

                                                            Activitatea clinicii se bazează exclusiv pe profesionalism,
                                                            experienţă şi colaborare strînsă cu pacienţii. Experienţa de
                                                            durată şi cunoștinţele actualizate în permanenţă prin
                                                            programe de
                                                            instruire stomatologică constituie temelia calităţii
                                                            serviciilor pe care le oferă echipa de medici. Acest fapt
                                                            garantează pacienţilor siguranţă şi satisfacţie de la
                                                            zâmbetul strălucitor şi încrederea
                                                            că au găsit locul şi medicul care este gata să le presteze
                                                            beneficii de sănătate la necesitate şi timpul potrivit.

                                                            Conceptul Centrului stomatologic Dr. Grossu gravitează în
                                                            cadrul ideii, că pacientul şi nevoile lui reprezintă
                                                            principala preocupare a întregului personal al centrului.
                                                            Acest fapt ne-a dat
                                                            încrederea că ne-am atins scopul de atunci, de cînd
                                                            pacienţii care ne-au trecut pragul pleacă cu zîmbetul senin,
                                                            sănătoşi şi mulţumiţi, gata oricând să revină cu plăcere.

                                                            Centrul stomatologic Dr. Grossu este ce-a mai potrivită
                                                            alegere pentru obţinerea unui zâmbet frumos şi sănătos.
                                                            Sunteţi aşteptaţi cu drag şi respect de echipa noastră, care
                                                            munceşte cu râvnă
                                                            şi încredere pentru zâmbetul Dumneavoastră.</p>
                                                        <a href="http://www.docdoc.md/files/2015/11/25/2f8067bca657ca1ff19af594ae35814e/price dr.grossu.pdf"
                                                           target="_blank" rel="noreferrer"  className="PriceList">Vezi price-list
                                                            complet</a>
                                                    </div>

                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="Details">
                                                        <div className="Phone">
                                                            Programări la telefon
                                                            <a href="tel:022600903">022-600-903</a>
                                                        </div>
                                                        <button className="Button PopupAjaxed basic-info-button"
                                                                data-action="http://www.docdoc.md/ro/appointments/2/275?ServiceId=&Price=0&Currency=MDL">Înscriere
                                                        </button>
                                                        <div className="Timing">
                                                            <strong>Program de lucru</strong>
                                                            <li>08:00 - 18:00</li>
                                                            <li>08:00 - 14:00</li>
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
                            <Domenii/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
