import React from "react";
import './Navbar.css';
export  default function Navbar () {
    let list=document.querySelectorAll('.list');
    let Item=document.querySelectorAll('.Item');
    for(let i=0;i<list.length;i++){
        list[i].addEventListener('click',function () {
            for(let j=0;j<list.length;j++){
                list[j].classList.remove('active');
            }
            // @ts-ignore
            this.classList.add('active');
            // @ts-ignore
            let dataFilter = this.getAttribute('data-filter');

            for (let k=0;k<Item.length;k++){
                Item[k].classList.remove('active');
                Item[k].classList.add('hide');

                if(Item[k].getAttribute('data-item') === dataFilter){
                    Item[k].classList.remove('hide');
                    Item[k].classList.add('active');
                }
            }
        })
    }
    return (
        <section className="navbar">
            <div className="container">
                <div className="row navbar">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 buton-group">
                        <ul>
                            <li className="list medicalcenter active" data-filter="Center">
                            <a href="/Institutii/Center" className="Center">Spitale și Centre medicale</a></li>
                    <li className="list diagnosticalcenter" data-filter="Diagnostic">
                        <a href="/Institutii/Diagnostic" className="Diagnostic">Centre de diagnostic</a></li>
                    <li className="list laborator" data-filter="Lab">
                        <a href="/Institutii/Laborator" className="Lab">Laboratoare</a></li>
                    <li className="list stomatologie" data-filter="Dental">
                        <a href="/Institutii/Stomatologie" className="Dental">Stomatologii</a></li>
                    <li className="list cosmetologie" data-filter="Beauty">
                                <a href="/Institutii/Cosmetologie" className="Beauty">Medicină estetică</a></li>
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
