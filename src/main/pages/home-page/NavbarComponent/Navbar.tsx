import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import './Navbar.css';
export  default function Navbar () {
    return (
        // <nav className="nav container">
        //     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        //     <ul>
        //         <li>
        //             <a href="/Spitale">Spitale si centre medicale</a>
        //         </li>
        //         <li>
        //                 <hr className="vl" /><a href="/Centre">Centre de diagnostic</a>
        //         </li>
        //         <li>
        //                 <hr className="vl" />  <a href="/Laboratoare">Laboratoare</a>
        //         </li>
        //          <li>
        //                 <hr className="vl" /> <a href="/Stomatologii">Stomatologii</a>
        //          </li>
        //         <li>
        //                 <hr className="vl"  /><a href="/Medicina">Medicina estetica</a>
        //         </li>
        //     </ul>
        //     </div>
        // </nav>
        <section className="navbar">
            <div className="container">
                <div className="row navbar">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 buton-group">
                        <ul>
                            <li className="medicalcenter">
                                <a href="http://www.docdoc.md/ro/institutions/center" className="Center">Spitale și Centre medicale</a></li>
                            <li className="diagnosticalcenter">
                                <a href="http://www.docdoc.md/ro/institutions/diagnostic" className="Diagnostic">Centre de diagnostic</a></li>
                            <li className="laborator">
                                <a href="http://www.docdoc.md/ro/institutions/lab" className="Lab">Laboratoare</a></li>
                            <li className="stomatologie">
                                <a href="http://www.docdoc.md/ro/institutions/dental" className="Dental">Stomatologii</a></li>
                            <li className="cosmetologie">
                                <a href="http://www.docdoc.md/ro/institutions/beauty" className="Beauty">Medicină estetică</a></li>
                        </ul>
                        <div className="buton-group__icon">
                            <div className="hamburger"></div>
                        </div>
                        <div className="buton-group__sidebar">
                            <ul>
                                <li className="medicalcenter"><a href="http://www.docdoc.md/ro/institutions/center"
                                                                 className="Center">Spitale și Centre medicale</a></li>
                                <li className="diagnosticalcenter"><a
                                    href="http://www.docdoc.md/ro/institutions/diagnostic" className="Diagnostic">Centre
                                    de diagnostic</a></li>
                                <li className="laborator"><a href="http://www.docdoc.md/ro/institutions/lab"
                                                             className="Lab">Laboratoare</a></li>
                                <li className="stomatologi"><a href="http://www.docdoc.md/ro/institutions/dental"
                                                               className="Dental">Stomatologii</a></li>
                                <li className="cosmetologie"><a href="http://www.docdoc.md/ro/institutions/beauty"
                                                                className="Beauty">Medicină estetică</a></li>
                            </ul>
                        </div>
                        <div className="buton-group__sidebar-bg">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
