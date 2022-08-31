import React from "react";
import './Navbar.css';
import $ from 'jquery';
import Institutions from "../../Institutions/Institutions";
export  default function Navbar () {
    $(document).ready(function() {
        $('.buton-group__icon').click(function (event) {
            $('.buton-group__icon').toggleClass('active');
            $('.buton-group__sidebar').toggleClass('active');
            $('.buton-group__sidebar-bg').toggleClass('active');
            $('body').toggleClass('no-scroll');
        });

        $('.buton-group__sidebar-bg').click(function (event) {
            $('.buton-group__icon').toggleClass('active');
            $('.buton-group__sidebar').toggleClass('active');
            $('.buton-group__sidebar-bg').toggleClass('active');
            $('body').toggleClass('no-scroll');
        });
    });
//     filterSelection("all")
//     function filterSelection(c: any) {
//         let x, i;
//         x = document.getElementsByClassName("filterDiv");
//         if (c == "all") c = "";
//         for (i = 0; i < x.length; i++) {
//             // @ts-ignore
//             RemoveClass(x[i], 'show');
//             if (x[i].className.indexOf(c) > -1) {
//                 // @ts-ignore
//                 AddClass(x[i], 'show');
//             }
//         }
//     }
//
//     function AddClass(element: any, name: string) {
//         let i, arr1, arr2;
//         arr1 = element.className.split(" ");
//         arr2 = name.split(" ");
//         for (i = 0; i < arr2.length; i++) {
//             if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//         }
//     }
//
//     function RemoveClass(element: any, name: string) {
//         let i, arr1, arr2;
//         arr1 = element.className.split(" ");
//         arr2 = name.split(" ");
//         for (i = 0; i < arr2.length; i++) {
//             while (arr1.indexOf(arr2[i]) > -1) {
//                 arr1.splice(arr1.indexOf(arr2[i]), 1);
//             }
//         }
//         element.className = arr1.join(" ");
//     }
//
// // Add active class to the current button (highlight it)
//     let btns = document.getElementsByClassName("list");
//     for (let i = 0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function(){
//             let current = document.getElementsByClassName("active");
//             current[0].className = current[0].className.replace(" active", "");
//             // this.className += " active";
//         });
//     }
    return (
        <section className="navbar">
                <div className="container">
                <div className="row navbar">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 buton-group ">
                        <ul>
                            <li className="list medicalcenter">
                            <a href="/Institutii/Center" className="Center">Spitale și Centre medicale</a>
                            </li>
                            <li className="list diagnosticalcenter" >
                            <a href="/Institutii/Diagnostic" className="Diagnostic">Centre de diagnostic</a>
                            </li>
                            <li className="list laborator" >
                            <a href="/Institutii/Laborator" className="Lab">Laboratoare</a>
                            </li>
                            <li className="list stomatologie" >
                            <a href="/Institutii/Stomatologie" className="Dental">Stomatologii</a>
                            </li>
                            <li className="list cosmetologie" >
                            <a href="/Institutii/Cosmetologie" className="Beauty">Medicină estetică</a>
                            </li>
                        </ul>
                        {/*<button className="list active" onClick={(c) => filterSelection('Center')}>Spitale și Centre medicale</button>*/}
                        {/*<button className="list" onClick={(c) => filterSelection('Diagnostic')}>Centre de diagnostic</button>*/}
                        {/*<button className="list" onClick={(c) => filterSelection('Lab')}>Laboratoare</button>*/}
                        {/*<button className="list" onClick={(c) => filterSelection('Dental')}>Stomatologii</button>*/}
                        {/*<button className="list" onClick={(c) => filterSelection('Beauty')}>Medicină estetică</button>*/}
                        <div className="buton-group__icon">
                            <div className="hamburger"></div>
                        </div>
                        <div className="buton-group__sidebar">
                            <ul>
                                <li className="medicalcenter">
                                    <a href="/Institutii/Center" className="Center">Spitale și Centre medicale</a>
                                </li>
                                <li className="diagnosticalcenter">
                                    <a href="/Institutii/Diagnostic" className="Diagnostic">Centre de diagnostic</a>
                                </li>
                                <li className="laborator">
                                    <a href="/Institutii/Laborator" className="Lab">Laboratoare</a>
                                </li>
                                <li className="stomatologi">
                                    <a href="/Institutii/Stomatologie" className="Dental">Stomatologii</a>
                                </li>
                                <li className="cosmetologie">
                                    <a href="/Institutii/Cosmetologie" className="Beauty">Medicină estetică</a>
                                </li>
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
