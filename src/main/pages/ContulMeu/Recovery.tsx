import React from "react";
import './Recovery.css';

export default function Recovery() {
    return (
        <div className="Main">
            <div className="container">
                <div className="Block Account Recovery">
                    <form method="POST" action="">
                        <h1>Resetează parola</h1>
                        <div className="Field">
                            <input type="text" name="Email" id="Email" value="" placeholder="E-mail"/>
                        </div>
                        <button type="submit" className="ButtonReset" id="LoginSubmit">Trimite</button>
                        <div className="c">
                            <a href="/ContulMeu">Intră în cabinetul
                                personal</a>
                            <a href="/Inregistrare">Înregistrare</a>
                        </div>
                    </form>
                    <div className="IconDecor"></div>
                </div>
            </div>
            <div className="Clear"></div>
        </div>
    );
}
