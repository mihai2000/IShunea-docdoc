import React, {useState} from "react";
import './ContulMeu.css';
import Axios from "axios";

export default function ContulMeu() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] =useState("");
    const login = () =>{
        Axios.post('http://localhost:3001/ContulMeu', {
            username:username,
            password:password,
        }).then((response)=>{
            if(response.data.message){
                setLoginStatus(response.data.message)
            }else {
                setLoginStatus(response.data[0].username)
            }
        });
    };
    return (
        <div className="Main">
            <div className="Block Account Login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form  className="Login">
                                <h1>Intră în cabinetul personal</h1>
                                <div className="Field">
                                    <input type="text" id="Email" name="username" placeholder="Username..."
                                           onChange={(e)=>{
                                               setUsername(e.target.value);
                                           }}
                                    />
                                </div>
                                <div className="Field">
                                    <input type="password" id="Password" name="password" placeholder="Parola..."
                                           onChange={(e)=>{
                                               setPassword(e.target.value);
                                           }}
                                    />
                                </div>
                                <div className="Field Save Check">
                                    <input type="checkbox" name="Save" id="Save"/>
                                    <label htmlFor="Save" id="SaveLabel">Ține-mă minte</label>
                                </div>
                                <button type="submit" className="ButtonCont" id="LoginSubmit"
                                onClick={login}>Intră</button>
                                <div className="a">
                                    <a href="/Inregistrare">Înregistrare</a>
                                    <a href="/Recovery">Nu puteți accesa contul?</a>
                                </div>
                                <h1>{loginStatus}</h1>
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
                                    <p>tel.: 0(22) 92 - 90 - 92</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
