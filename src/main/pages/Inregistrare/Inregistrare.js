import React, {useState} from "react";
import './Inregistrare.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine, faCheckSquare, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import Inputmask from "inputmask";
import Axios from 'axios';

export default function Inregistrare() {
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const register = () =>{
        Axios.post('http://localhost:3000/Inregistrare', {
            username:usernameReg, password:passwordReg,
        }).then((response)=>{
            console.log(response);
        });
    };
    $(document).ready(function () {
        Inputmask().mask(document.querySelectorAll("input"));
    });
    const proprii = () => {
        // @ts-ignore
        document.getElementById("Name").classList.remove('Active');
        // @ts-ignore
        document.getElementById("Title").classList.add('Active');
    }
    const clinicii = () => {
        // @ts-ignore
        document.getElementById("Name").classList.add('Active');
        // @ts-ignore
        document.getElementById("Title").classList.remove('Active');
    }

    return (
        <div className="Main">
            <div className="Block Account SignUp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="Arguments">
                                <h2>Primiți pacienți noi de la serviciul docdoc.md</h2>
                                <p>&Icirc;nregistrați-vă pe site-ul nostru și &icirc;ncepeți să primiți un flux mai mare
                                    de pacienți, veniți de la unicul serviciu național de programare la doctor.</p>
                                <h3>Ce vă propunem?</h3>

                                <div className="d-inline-flex">
                                    <FontAwesomeIcon className="Icon1" icon={faChartLine}/>
                                    <div className="row">
                                        <h4>Mai mulți pacienți</h4>
                                        <p>
                                            Datorită docdoc.md pacienții sunt programați direct și rapid la consultația
                                            specialiștilor și serviciilor medicale din clinica dumneavoastră.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-inline-flex">
                                    <FontAwesomeIcon className="Icon2" icon={faCheckSquare}/>
                                    <div className="row">
                                        <h4>Plătiți doar pentru rezultat</h4>
                                        <p>
                                            Achitați doar pentru pacientul care s-a programat și a beneficiat de
                                            serviciile
                                            medicale prestate de clinică.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-inline-flex">
                                    <FontAwesomeIcon className="Icon3" icon={faThumbsUp}/>
                                    <div className="row">
                                        <h4>Micșorați cheltuielele</h4>
                                        <p>
                                            Pacienții veniți de la docdoc.md costă de c&acirc;teva ori mai puțin
                                            dec&acirc;t
                                            cei atrași prin alte metode de marketing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <form >
                                <h1>Înregistrare</h1>
                                <div className="radio" id="radio">
                                    <div className="active">
                                        <input onClick={proprii} type="radio" name="Type" value="1" id="TypeDoctor"/>
                                        <label htmlFor="TypeDoctor">Eu reprezint interesele proprii</label>
                                    </div>
                                    <div className="">
                                        <input onClick={clinicii} type="radio" name="Type" value="2" id="TypeClinic"/>
                                        <label htmlFor="TypeClinic"> Eu reprezint interesele clinicii</label>
                                    </div>
                                </div>
                                <div className="Field">
                                    <input type="text"  placeholder="Username..."
                                           onChange={(e)=> {
                                               setUsernameReg(e.target.value);
                                           }}
                                    />
                                </div>
                                <div className="Field">
                                    <input type="password" placeholder="Password..."
                                           onChange={(e)=> {
                                               setPasswordReg(e.target.value);
                                           }}
                                    />
                                </div>
                                <div id="Name">
                                    <div className="Field">
                                        <input type="text" name="FirstName" id="FirstName" value=""
                                               placeholder="Prenume"/>
                                    </div>
                                    <div className="Field">
                                        <input type="text" name="LastName" id="LastName"
                                               placeholder="Nume"/>
                                    </div>
                                </div>
                                <div id="Title" className="Field Active">
                                    <input type="text" name="Title"
                                           placeholder="Denumirea clinicii"/>
                                </div>
                                <div className="Field">
                                    <input required name="phone" id="phone" type="text"
                                           data-masked="" data-inputmask="'mask': '+373 (99) 999-999'"
                                           placeholder="Telefon"/>
                                </div>
                                <div className="Field">
                                    <input type="text" name="Email" id="Email"
                                           placeholder="E-mail"/>
                                </div>
                                <div className="checkTermeni">
                                    <p><input
                                        type="checkbox"
                                        className="Locked"
                                        defaultChecked={true}
                                        disabled={true}
                                    />
                                        Am citit și sunt de acord cu
                                        <a href="/TermeniSiConditii">Termeni şi
                                            сondiţii</a></p>
                                </div>
                                    <button type="submit" className="Button basic-info-button"
                                            onClick={register}
                                            id="LoginSubmit">
                                            Înregistrează
                                    </button>

                                <div className="b">
                                    <a href="/ContulMeu">Intră în cabinetul
                                        personal</a>
                                    <a href="/Recovery">Nu puteți accesa
                                        contul?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
