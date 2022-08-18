import React from "react";
import  './Contacte.css';

export default function contacte(){
    return(
        <div className="mainContact">
            <div className="container ">
                <div className="row">
                    <h1 className="title">Contacte</h1>
                    <table className="tableContact">
                        <tbody>
                        <tr>
                            <td>
                                <h4 >Oficiul nostru </h4>
                                <h6>Vă răspundem cu plăcere la &icirc;ntrebările, sugestiile Dvs.
                                    Adresa:Chisinău,str. Pușkin 47/1, bloc C, of.5 <br/>
                                    e-mail:<a href="mailto:info@docdoc.md">info@docdoc.md</a>
                                    <p>Tel.:022 600 903</p>
                                </h6>
                            </td>
                            <td>
                                <iframe title="maps"
                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.5331039399234!2d28.842529999999996!3d47.029768999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c497739be35%3A0xea17766723f6ef98!2sDocDoc!5e0!3m2!1sru!2s!4v1436340860981"
                                ></iframe>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
