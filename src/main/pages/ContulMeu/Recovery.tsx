import React from "react";
import './Recovery.css';
 export default function Recovery(){
     return(
         <div className="Main">
             <div className="container">
                 <div className="Block Account Recovery">
                     <form method="POST" action="http://www.docdoc.md/ro/account/Recovery">
                         <h1>Resetează parola</h1>
                         <div className="Field">
                             <input type="text" name="Email" id="Email" value="" placeholder="E-mail"/>
                         </div>
                         <button type="submit" className="ButtonReset" id="LoginSubmit">Trimite</button>
                         <div className="c">
                             <a href="http://www.docdoc.md/ro/account">Intră în cabinetul
                                 personal</a>
                             <a href="http://www.docdoc.md/ro/account/SignUp">Înregistrare</a>
                         </div>
                     </form>
                     <div className="IconDecor"></div>
                 </div>
             </div>
             <div className="Clear"></div>
         </div>
     );
 }
