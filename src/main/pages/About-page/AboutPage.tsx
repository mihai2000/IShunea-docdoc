import React from "react";
import './AboutPage.css';
export default function AboutPage(){
    return(
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="first-div">
                    <h1 className="title">Despre docdoc.md</h1>
                    <p><strong>docdoc.md</strong> &ndash; Serviciul național de programare la doctor.  </p>
                    <p><strong>Scopul nostru</strong> - să ajutăm pacienții să găsească un medic profesionist și &icirc;i
                        programăm la consultație sau servicii medicale, c&acirc;t mai rapid. Pentru aceasta, am creat o bază de date a doctorilor,
                        clinicilor și centrelor de diagnostic din Republica Moldova. Adunăm recenziile pacienților,
                        după consultarea cu medicul și le publicăm pe portal. Oferim informații detaliate despre medicii specialiști
                        (experiență, calificare, specializare, program de lucru).
                    </p>
                    </div>
                    <div className="listDespre">
                    <h1 className="title2">Cum funcționează DOCDOC.md</h1>
                    <ol>
                    <li><span className="span">Alegeți un doctor personal</span>
                        <ul className="disc">
                            <li className="li">toți medicii și clinicile de pe un singur site;</li>
                            <li className="li">programare rapidă la orice specialist;</li>
                            <li className="li">alegerea doctorului după specializare, preț consultație, adresa, rating și recenzii.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="span">Sau sunați la call center 0 (22) 600 903 / 076 700 903</span>
                        <div className="li">
                            Oratorii din call center-ul DOCDOC.MD vă vor ajuta rapid să găsiți un doctor
                            bun și cum să ajungeți la clinică.
                        </div>
                    </li>
                    <li>
                        <span className="span">Confirmare și reamintire</span>
                        <div className="li">După programare, veți primi un SMS de reamintire cu data și adresa programării;</div>
                    </li>
                    <li><span className="span">Feedback</span>
                        <div className="li">După consultația cu doctorul operatorii  call center-ul DOCDOC.MD
                            vă contactează și solicită părerea Dvs despre consultația primită:
                        </div>
                        <ul className="disc">
                            <li className="li">recenzia Dvs ajută la formarea ratingului medicului pe site;</li>
                            <li className="li">Dvs ajuți și alți pacienți la alegerea doctorului de pe site.</li>
                        </ul>
                    </li>
                    </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
