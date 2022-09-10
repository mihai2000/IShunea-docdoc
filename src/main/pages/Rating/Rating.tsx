import React from "react";
import './Rating.css';

export default function Rating() {
    return (
        <div className="main">
            <div className="container ">
                <div className="row">
                    <div className="first">
                        <h1 className="title">Despre rating</h1>
                        <div>&Icirc;nțelegem perfect c&acirc;t de valoros este ratingul doctorului afișat pe pagina
                            noastră.
                            Știm că acesta joacă un rol important atunci c&acirc;nd vă alegeți specialistul de care
                            aveți nevoie.Din acest motiv afișăm un rating corect și transparent.La formarea ratingului
                            participați nemijlocit și dumneavoastră atunci c&acirc;nd răspundeți la &icirc;ntrebările
                            consulanților noștri după ce ați făcut vizita la doctor!
                        </div>
                    </div>
                    <div className="divs">
                        <p>De ce depinde ratingul de pe site?</p>
                        <p>Ca să vă prezentăm &icirc;ntr-o formă corectă și comodă informația despre doctori, special
                            pentru dumneavoastră am creat un sistem unic și deosebit de rating.
                            Ratingul doctorului se calculează &icirc;n baza caracteristicilor profesionale ale
                            doctorului și ale feedbackului lăsat de pacienți, &icirc;n urma vizitei făcute la el.</p>
                    </div>
                    <div className="strong"> Caracteristicile profesionale care formează ratingul doctorului pe site-ul
                        nostru de la bun &icirc;nceput.
                    </div>
                    <div className="divs">
                        <p><i>Noi luăm &icirc;n calcul:</i></p>
                        <ul>
                            <li>experiența de lucru a doctorului;</li>
                            <li>calificarea;</li>
                            <li>gradul academic.</li>
                        </ul>
                    </div>
                    <div className="divs">
                        <p>De unde luăm informația despre activitatea profesională a doctorilor?</p>
                        <p>
                            Fiecare doctor care are un profil pe pagina noastră, ne furnizează informația despre
                            calificarea și activitatea dumnealui. De asemenea, noi urmărim activitatea doctorilor
                            și avem grijă să re&icirc;noim mereu informația, &icirc;n cazul &icirc;n
                            care apare această necesitate.
                        </p>
                    </div>
                    <div className="divs">
                        <p>Cum colectăm feedbackul?</p>
                        <p>
                            <strong>Feedbackul vine direct de la pacienți.</strong> După ce pacientul a făcut vizita la
                            medic,
                            consultanții noștri le sună și le pun c&acirc;teva &icirc;ntrebări referitoare
                            la calitatea și profesionalismul cu care au fost deserviți de doctor. De asemenea,
                            clienții noștri dau note - de la unu la cinci după ce au vizitat doctorul.
                        </p>
                    </div>
                    <div className="divs">
                        <p>Care sunt criteriile după care dăm note doctorilor.</p>
                        <ul>
                            <li>atenția doctorului - c&acirc;t de pedant a fost acesta &icirc;n timpul examinării;
                            </li>
                            <li>calificarea doctorului &ndash; grija cu care a făcut examinarea pacientului &icirc;n
                                timpul consultației;
                            </li>
                            <li>preț-calitate &ndash; raportul dintre calitatea și prețul deservirii.
                            </li>
                        </ul>
                    </div>
                    <div className="divs">
                        <p>De ce puteți avea &icirc;ncredere &icirc;n feedbackul de pe site-ul nostru?</p>
                        <p><strong> Feedbackul</strong> și comentariile pacienților noștri sunt indispensabile
                            serviciului
                            docdoc.md. Prin intermediul lor, pacienții &icirc;mpărtășesc experiențile și părerile lor
                            cu viitorii pacienți, astfel &icirc;i ajută pe aceștea să facă o alegere corectă.
                            Din acest motiv, pe site-ul nostru publicăm doar feedbackurile verificate, care au drept
                            scop să informeze și să-i ajute pe ceilalți pacienți să aleagă un doctor potrivit.
                        </p>
                    </div>
                    <div className="divs">
                        <p>De ce pe site-ul nostru nu poate lăsa feedback oricine?</p>
                        <p>
                            Pe docdoc.md poate lăsa feedback doar pacienții verificați, cei care au fost cu adevărat
                            la doctor și s-au programat prin intermediul serviciului nostru. Acest lucru exclude
                            probabilitatea ca pe site-ul nostru să apară comentarii și păreri de la pacienți
                            inexistenți.
                        </p>
                    </div>
                    <div className="divs">
                        <p>Pe docdoc se publică doar comentariile și feedbackul pozitiv?</p>
                        <p>Nu! Vrem să fim utili și să oferim informație veridică pacienților noștri.
                            De asemenea, ne dorim să fim parteneri utili și corecți și față de clinicile cu care lucrăm.
                            Din acest motiv publicăm toate feedbackurile &ndash; pozitive, negative și neutre.</p>
                    </div>
                    <div className="divs">
                        <p>Cum pot lăsa pacienții un feedback util?</p>
                        <p>
                            Pentru ca feedbackul să fie util, pacientul trebuie să fie sincer și să lase c&acirc;t
                            mai multă informație despre vizita pe care a făcut-o la medic. Detalii despre modul
                            &icirc;n care s-a comportat medicul și c&acirc;t de serviabil a fost personalul clinicii.
                            Ne dorim ca fiecare pacient să știe că feedbackul lui este absolut necesar serviciului pe
                            care-l facem noi. Mai mult dec&acirc;t at&acirc;t, feedbackul este o sursă veridică
                            de informare a viitorilor pacienți.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
