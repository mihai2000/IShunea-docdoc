import React from "react";
import './Institutions.css';
import SearchComponentInstitutions from "./SearchComponent/SearchComponentInstitutions";
import CentreMedicale from "./CentreMedicale/CentreMedicale";
import CentreDiagnostic from "./CentreDiagnostic/CentreDiagnostic";
import Laborator from "./Laborator/Laborator";
import Stomatologii from "./Stomatologii/Stomatologii";
import MedicinaEstetica from "./MedicinaEstetica/MedicinaEstetica";
import PropsLabs from "./Laborator/PropsLabs";
export default function Institutions(){
    return(
        <div className="Main">
            <div className="Block">
                <div className="Clinics Section">
                    <SearchComponentInstitutions/>
                    <div className="container">
                        <div className="row">
                            <div className="filterDiv col-md-9">
                                <CentreMedicale/>
                                <CentreDiagnostic/>
                                <PropsLabs/>
                                <Stomatologii/>
                                <MedicinaEstetica/>
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
                            <div className="col-sm-3">
                                <div className="Related">
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
