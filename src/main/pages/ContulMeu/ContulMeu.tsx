import React from "react";
import './ContulMeu.css';

export default function ContulMeu() {
    return (
        <div className="Main">
            <div className="Block Account Login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form method="POST" action="http://www.docdoc.md/ro/account?Action=Login"
                                  className="Login">
                                <h1>Intră în cabinetul personal</h1>

                                <div className="Field">
                                    <input type="text" name="Email" id="Email" value="mail" placeholder="E-mail"/>
                                </div>
                                <div className="Field">
                                    <input type="password" name="Password" id="Password" placeholder="Parola"/>
                                </div>
                                <div className="Field Save Check">
                                    <input type="checkbox" name="Save" id="Save"/>
                                    <label htmlFor="Save" id="SaveLabel">Ține-mă minte</label>
                                </div>
                                <button type="submit" className="ButtonCont" id="LoginSubmit">Intră</button>
                                <div className="a">
                                    <a href="/Inregistrare">Înregistrare</a>
                                    <a href="/Recovery">Nu puteți accesa contul?</a>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="Info">
                                <p>
                                    Dacă aveți &icirc;ntrebări legate de &icirc;nregistrarea online, vă rugăm să ne
                                    contactați:
                                </p>
                                <div className="Info2">
                                    <p>email:<a href="mailto:service.docdoc@gmail.com">service.docdoc@gmail.com</a></p>
                                    <p>tel.: 0(22) 92 &ndash; 90 - 92</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
