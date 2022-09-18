import React from 'react';
import './ProgramareDoctor.css';
import iconline from '../../../../assets/iconline.png';
import icontriangle from '../../../../assets/icontriangle.png';
import iconarrowright2 from '../../../../assets/iconarrowright2.png';
import '../../../../i18next/i18n';
import { withNamespaces } from 'react-i18next';
//@ts-ignore
function ProgramareDoctor({t}) {
    const show = () => {
        const active = document.querySelectorAll('.d-none');
        active.forEach(active => {
            active.classList.remove('d-none');
        });
        const hidden = document.querySelectorAll('#hide');
        hidden.forEach(hidden => {
            hidden.classList.add('d-none');
        });
    }

    return (
        <section>
            <div className="program-medic1 container">
                <div className="row container">
                    <h1>{t('ProgramareDoctor.ProgramareText')}</h1>
                    <div className="figure">
                        <img className="line1" src={iconline} alt="line"/>
                        <img className="triangle" src={icontriangle} alt="triangle"/>
                        <img className="line2" src={iconline} alt="line"/>
                    </div>
                </div>
            </div>
            <div className="program-medic2" id="doctors-list">
                <div className="container">
                    <div id="" className="row program-medic2">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <ul>
                                <li className="">
                                    <a href="/Doctors">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.1')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/alergologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.2')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/andrologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.3')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/cardiologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.4')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/chirurgie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.5')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/chirurgie-estetica">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.6')}</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/chirurgie-plastica">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Chirurg plastician</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/cosmetologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Cosmetolog</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/dermatologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Dermatolog</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/nutritie-si-dietica">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Dietolog, Nutriționist</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/diagnostic-cu-ultrasunet">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Ecografist</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/endocrinologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Endocrinolog</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/endoscopie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Endoscopist</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/endoscopie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Fitoterapeut</h1>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <ul>
                               <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/fizioterapie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.7')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/flebologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.8')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/gastroenterologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.9')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/ginecologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.10')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/hematologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.11')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/hepatologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.12')}</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/imagist">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Imagist</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/boli-infectioase-tropicale-si-parazitologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Infecționist</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/medicina-interna">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Internist</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/kinetoterapie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Kinetoterapeut</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/mamologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Mamolog</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/medic-de-familie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Medic de familie</h1>
                                    </a>
                                </li>
                                <li className="d-none">
                                    <a href="http://www.docdoc.md/ro/doctors/nefrologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Nefrolog</h1>
                                    </a>
                                </li>
                                <li className="d-none">
                                    <a href="http://www.docdoc.md/ro/doctors/nefrologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Neuro-psihiatru</h1>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <ul>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/neurochirurg">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.13')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/neurologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.14')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/obstetrica">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.15')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/oftalmologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.16')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/oncologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.17')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/ortopedie-si-traumatologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.18')}</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/otorinolaringologie-orl">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Otorinolaringolog (ORL)</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/pediatrie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Pediatru</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/pneumologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Pneumolog</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/proctologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Proctolog</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/psihiatrie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Psihiatru</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/psihologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Psiholog</h1>
                                    </a>
                                </li>
                                <li className="d-none">
                                    <a href="http://www.docdoc.md/ro/doctors/psihoterapie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Psihoterapeut</h1>
                                    </a>
                                </li>
                                <li className="d-none">
                                    <a href="http://www.docdoc.md/ro/doctors/reabilitolog">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Reabilitolog</h1>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <ul>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/reflexologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.19')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/reproducere-umana">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.20')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/reumatologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.21')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/sexologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.22')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/masaj">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.23')}</h1>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="http://www.docdoc.md/ro/doctors/stomatologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>{t('ProgramareDoctor.DoctorList.24')}</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/terapie-manuala">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Terapeut manual</h1>
                                    </a>
                                </li>
                                <li className=" d-none">
                                    <a href="http://www.docdoc.md/ro/doctors/trihologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Triholog</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/urologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Urolog</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/venerologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Venerolog</h1>
                                    </a>
                                </li>
                                <li className=" d-none ">
                                    <a href="http://www.docdoc.md/ro/doctors/vertebrologie">
                                        <div className="program-medic2__icon"></div>
                                        <h1>Vertebrolog</h1>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row program-medic3">
                <div className="container">
                    <a onClick={show} href="#doctors-list" id="hide">
                        <h1>{t('ProgramareDoctor.AllDoctor')}</h1>
                        <img src={iconarrowright2} alt="iconarrowright2"/>
                    </a>
                </div>
            </div>
        </section>
    );
}
// @ts-ignore
export default withNamespaces()(ProgramareDoctor)
