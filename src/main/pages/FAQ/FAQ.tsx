import React from "react";
import './FAQ.css';
export default function FAQ(){
    return(
        <div className="main">
            <div className="container ">
                <div className="row">
                    <h1 className="title">Întrebări frecvente</h1>
                    <div className="titleFAQ">Despre docdoc.md</div>
                    <div className="title-div"><span>Ce este docdoc.md?</span>
                        <p>docdoc.md este un serviciu de căutare a medicilor și de programare prealabilă la consultație. Noi ajutăm pacienții
                    să selecteze un doctor bun, mai aproape de casă, la un preț accesibil.</p>
                    </div>
                    <div className="title-div"><span>docdoc.md este o clinică?</span>
                        <p>Nu, docdoc.md este un serviciu unde vă puteți găsi și face o programare la o clinică de &icirc;ncredere.
                            Portalul docdoc.md nu oferă servicii de asistență medicală.</p>
                    </div>
                    <div className="title-div"><span>Pot face o programare la oricare medic din Moldova?</span>
                        <p>Acum docdoc.md este
                        accesibil doar &icirc;n Chișinău, &icirc;n sectoarele - Botanica,Centru, Ciocana, R&icirc;șcani,
                        Buicani, Sculeni și Telecentru. Suntem &icirc;n curs de dezvoltare și dorim să facem acces la serviciul
                            docdoc și &icirc;n raioanele Republicii Moldova.</p>
                    </div>
                    <div className="title-div"><span>docdoc.md este gratuit pentru pacienți?</span>
                        <p>Da, serviciul național de programare la doctor
                        este absolut gratuit pentru pacienți. Plata serviciilor medicale se achită la clinica &icirc;n
                            care pacientul se adresează.</p>
                    </div>
                    <div className="title-div"><span>C&acirc;t costă o consultație la doctor prin intermediul docdoc.md?</span>
                        <p>Costul consultației la medic,
                        depinde de clinica &icirc;n care lucrează. Noi garantăm că nu supraestimăm costul serviciilor și prețul
                            corespunde cu lista de prețuri a clinicei respective.</p>
                    </div>
                    <div className="title-div">
                       <span>Ce este serviciul de căutare a clinicilor?</span>
                        <p>Serviciul de căutare a clinicilor &ndash; reprezintă căutarea unui centru de diagnostic
                        sau clinică stomatologică. și amplasarea lor pe hartă. Să aflați prețul unei investigații
                            medicale. De asemenea, puteți face o programare și prin telefon.</p>
                    </div>
                    <div className="titleFAQ">Despre programarea la medic </div>
                    <div className="title-div"><span>Cum să aleg un medic bun pe site-ul docdoc.md?</span>
                        <p>Selectați medicul specialist și regiunea unde locuiți. Din lista de specialiști puteți
                    alege doctorul de care aveți nevoie. Aveți posibilitatea să clasați medicii după vechimea &icirc;n
                            muncă, prețul consultației sau rating. Separat, puteți selecta medicii care fac consultație
                            la domiciliu și care consultă copii. Un
                            doctor bun vă poate fi recomandat și prin telefon, de către consultanții
                            serviciului Call Center-ului docdoc.md.</p>
                    </div>
                    <div className="title-div"><span>Cum pot face o programare la medic?</span>
                        <p>Vă puteți programa la consultație prin telefon sau lăs&acirc;nd o cerere direct pe chestionarul
                            medicului.</p>
                    </div>
                    <div className="title-div"><span>Cum se achită o consultație la medic?</span>
                        <p>Consultația medicului se achită după ce ați făcut vizita la clinică. Docdoc este un serviciu
                    gratuit pentru pacienți.</p>
                    </div>
                    <div className="title-div"><span>Cum pot să public o recenzie?</span>
                        <p>Toate recenziile pe site-ul nostru sunt riguros
                        verificate pentru autenticitate. După vizita la medic,colaboratorii noștri anchetează
                        pacienții prin telefon pentru a obține o recenzie veridică. Recenziile depuse pe
                            site-ul nostru necesită aprobarea moderatorului &icirc;nainte de a fi postate.</p>
                    </div>
                    <div className="titleFAQ">Colaborare</div>
                    <div className="title-div"><span>Cum să devii un partener docdoc.md?</span>
                        <p>Toate &icirc;ntrebările de colaborare cu site-ul nostru le puteți adresa către
                            managerul proiectului, Liliana Manic, la adresa electronică:
                            <p className="mail">liliana@docdoc.md</p></p>
                    </div>
                    <div className="title-div"><span>Cum să am acces la &rdquo;Cabinetul meu&rdquo;?</span>
                        <p>Loginul și Parola pentru &bdquo;Cabinetul meu&rdquo; &icirc;l poate primi medicul
                            sau clinica din partea departamentului de &icirc;nregistrare după semnarea unui contract de colaborare.</p>
                    </div>
                    <div className="title-div"><span>Cum se postează profilul medicilor pe site?</span>
                        <p>Profilul medicilor se postează pe site, prin intermediul departamentului de &icirc;nregistrare,
                            &icirc;n decurs de trei zile lucrătoare din data depunerii informațiilor.</p>
                    </div>
                    <div className="title-div"><span>Cum c&acirc;știgă bani serviciul docdoc?</span>
                       <p>Docdoc.md este un serviciu gratuit pentru pacienți. Pentru clinici funcționează sistemul
                        de plată lunar. Costul serviciilor oferite de docdoc.md pentru clinici și medici este
                           individual pentru fiecare centru medical aparte.</p>
                    </div>
                    <div className="title-div"><span>Cum se &icirc;nregistrează clinica?</span>
                        <p>Pentru a vă &icirc;nregistra clinica pe site, completați datele despre clinică, telefon de
                        contact și e-mail &icirc;n compartimentul &bdquo;&Icirc;nregistrare&rdquo;. Apoi, managerul
                            vă va contacta și vă va explica pașii următori.</p>
                    </div>
                    <div className="title-div"><span>Cum se &icirc;nregistrează ca medic particular?</span>
                        <p>Pentru a vă &icirc;nregistra
                        ca medic particular, completați datele dvs, telefon de contact și e-mail, &icirc;n
                        compartimentul &bdquo;&Icirc;nregistrare&rdquo;. După, managerul vă va contacta
                        și vă va explica pașii următori.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
