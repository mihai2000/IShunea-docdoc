import React from "react";
import logo from "../../assets/docdoc-logo-retina.png";
import iconphoneheader from "../../assets/iconphoneheader.png";
import './header.css';
import $ from 'jquery';
import Inputmask from 'inputmask';


function Header() {
      $(document).ready(function() {
    Inputmask().mask(document.querySelectorAll("input"));
          // $("#CallBack").focusin(function() {
          //     $("label").toggleClass( "d-none" );
          // });
          // $("input").blur(function() {
          //     $(this).toggleClass( "d-none" );
          // });
     });

    const phone = () =>
    {
        // @ts-ignore
        document.getElementById("disapear").classList.add('d-none');
        // @ts-ignore
        document.getElementById("show").classList.remove('d-none');
    }
    const text = () =>
    {
        // @ts-ignore
        document.getElementById("disapear").classList.remove('d-none');
        // @ts-ignore
        document.getElementById("show").classList.add('d-none');
    }

    return (

        <section className="header">
            <div className="container">
                <div className="row header">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 icon">
                                <a href="/">
                                    <img src={logo} className="logo" alt="logo" />
                                </a>
                    </div>
                    <div  className="col-lg-4 col-md-4 col-sm-6 col-xs-12 contact-info-2 contact-info-1 contact-info-2-2">
                        <div className="link-block"><a href="http://www.docdoc.md/ro" className="active">ro</a><a
                            href="http://www.docdoc.md/ru" className="">ru</a>
                        </div>

                        <h1 className="cititle">Programează-te la doctor</h1>
                        <a href="tel:022600903">
                            <div className="call-now">
                                <img src={iconphoneheader} alt="iconphoneheader"/>
                                <h1>022-600-903</h1>
                            </div>
                        </a>
                        <div className="number-form">
                            <div className="CallBack" id="CallBack">
                                <label onClick={phone} id="disapear" className="number-form__callback">sau noi te vom suna înapoi</label>
                                <div className="Form mask d-none" id="show" >
                                    <input  id="phoneNumber" type="text " data-masked=""
                                            data-inputmask="'mask': '+373 (99) 999-999'"
                                           placeholder="+373 (__) ___-___" className="form-control"/>
                                    <button onClick={text}> OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Header;

