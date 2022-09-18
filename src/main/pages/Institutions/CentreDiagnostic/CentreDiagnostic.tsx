import React from "react";
import '../Institutions.css';
import Domenii from "../Domenii";
import Pagination from "../Pagination";
import SearchComponentInstitutions from "../SearchComponent/SearchComponentInstitutions";


export default function CentreDiagnostic() {
    return (
        <div className="Main">
            <div className="Block">
                <div className="Clinics Section">
                    <SearchComponentInstitutions/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 Diagnostic">
                                <h1>Centre de diagnostic: <b>1</b></h1>
                                <div className="List TopList">
                                    <div className="Content">
                                        <div className="Item">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <div className="Left">
                                                        <a href="http://www.docdoc.md/ro/clinics/excellence"
                                                           className="Logo">
                                                            <img
                                                                src="http://www.docdoc.md/files/2016/03/25/2480d4323a2e390e8a68938f098fd1ee.160x135-fit/excellence-centru-medical.png"
                                                                alt="Excellence Centru Medical "/>
                                                        </a>
                                                        <div className="Map">
                                                            <iframe title="map"
                                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1618.2721047494992!2d28.82740332886392!3d46.98922167324997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe06982c767f80c8e!2sExcellence!5e0!3m2!1sen!2s!4v1478782681486"
                                                                    width="162"
                                                                    height="100" className="Map"></iframe>
                                                            <div className="PopupAjaxed"
                                                                 data-action="http://www.docdoc.md/ro/clinics/excellence?Map">Mărește
                                                                harta
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="Info">
                                                        <a href="http://www.docdoc.md/ro/clinics/excellence">
                                                            <h2 className="Underline">Excellence Centru Medical </h2>
                                                        </a>
                                                        <div className="Address">Chișinău, str. Grenoble, 23</div>
                                                        <p>Centrul Medical “EXCELLENCE” este o instituţie
                                                            multifuncţională de
                                                            diagnostic, asistenţă medicală primară şi specializată.
                                                            Chiar de la
                                                            deschiderea centrului, în ianuarie 2008, ne-am propus să
                                                            oferim
                                                            clienţilor noştri servicii medicale complete, la un înalt
                                                            standard calitativ
                                                            folosind cel mai performant utilaj medical de diagnostic şi
                                                            laborator.
                                                            Integrarea parţială a Centrului Medical în
                                                            sistemul asigurărilor de sănătate existent în Republica
                                                            Moldova ne permite
                                                            să oferim clienţilor/pacienţilor toate facilitaţile aferente
                                                            statutului de
                                                            contribuabil la Compania Naţională de asigurări
                                                            în Medicină. <br/>
                                                            Centrul Medical <q>Excellence</q> vine acum în întâmpinarea
                                                            necesitaţilor moderne de diagnostic rapid şi eficient,
                                                            oferind evaluări
                                                            de performanţă înaltă şi asigurând servicii medicale la
                                                            standarde europene, prestate de personal medical competent.
                                                            Asistenţa medicală în CM <q>Excellence</q> acoperă peste 12
                                                            specialităţi
                                                            medicale, 9 explorări paraclinice şi peste 300 tipuri de
                                                            analize de
                                                            laborator. Misiunea noastră este de a oferi servicii
                                                            care să raspundă la cele mai exigente cerinte medicale de
                                                            profesionalism, siguranţă şi confort. In opinia noastră
                                                            medicina
                                                            modernă presupune şi o schimbare a mentalităţii pacienţilor
                                                            despre
                                                            propria
                                                            sănătate, o schimbare a atitudinii în relaţia medic-pacient
                                                            şi
                                                            realizarea unui climat propice comunicării permanente în
                                                            beneficiul
                                                            pacienţilor.</p>
                                                        <a href="http://www.docdoc.md/files/2018/05/17/1ef0ba9035561342b054ada47992bce7/price 2018.pdf"
                                                           target="_blank" className="PriceList">Vezi price-list
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
                                                                data-action="http://www.docdoc.md/ro/appointments/2/919?ServiceId=&Price=0&Currency=MDL">
                                                            Înscriere
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
