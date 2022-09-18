import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "./Modal/Modal";
import './ProgramareServicii.css';
import '../../../../i18next/i18n';
import { withNamespaces } from 'react-i18next';
//@ts-ignore
function ProgramareServicii({t}) {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    // @ts-ignore
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <section>
            <div className="container">
                <div className="program-service1">
                    <h1>{t('ProgramareServicii.ProgramareText')}</h1>
                    <div className="figure">
                        <img className="line1" src="http://www.docdoc.md/static/img/iconline.png" alt="line"/>
                        <img className="triangle" src="http://www.docdoc.md/static/img/icontriangle.png"
                             alt="triangle"/>
                        <img className="line2" src="http://www.docdoc.md/static/img/iconline.png" alt="line"/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="form-group row program-service2">
                    <div className="col-lg-3 col-md-6 col-sm-12 ">
                        <ul>
                            <li className="column-title">
                                <a href="http://www.docdoc.md/ro/service/ecografie">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.1')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/neurosonografia-prin-fontanela">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.2')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/ecografie-glanda-tiroida">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.3')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/ecografie-abdominala">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.4')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/ecogrtafie-sistemul-urinar">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.5')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/ecografie-bazinul-mic">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.6')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/ecografie-complexa">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.7')}</h3>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 ">
                        <ul>
                            <li className="column-title">
                                <a href="http://www.docdoc.md/ro/service/mamografie-glandele-mamare">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.8')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/mamografia-ambelor-glandelor-mamare-in-regim-digital-4-filme">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.9')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/mamografia-ambelor-glandelor-mamare-in-regim-digital-2-filme">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.10')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/mamografia-unei-glande-mamare">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.11')}</h3>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 ">
                        <ul>
                            <li className="column-title">
                                <a href="http://www.docdoc.md/ro/service/radiografie">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.12')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/oasele-bazinului">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.13')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/oasele-bratului">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.14')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/pielografia-rinichi">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.15')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/rengen-articulatia-genunchiului">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.16')}</h3>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ul>
                            <li className="column-title">
                                <a href="http://www.docdoc.md/ro/service/tomografie-computerizata">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.17')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/cerebrala-fara-contract">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.18')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/nazofaringele">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.19')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/coloana-vertebrala-cervicala">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.20')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/tc-abdomen">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.21')}</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/service/tc-organele-bazinului-mic">
                                    <div className="program-service2__icon"></div>
                                    <div className="program-service2__text">
                                        <h3>{t('ProgramareServicii.ServiciiList.22')}</h3>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="program-service3">
                    <div>
                            {
                                values.map((v) => (
                                    <Button variant="link" className="btn me-2 mb-2" onClick={() => handleShow(v)}>
                                        <h1>{t('ProgramareServicii.AllServicii')}</h1>
                                        <img src="http://www.docdoc.md/static/img/iconarrowright2.png"
                                             alt="iconarrowright2"/>
                                    </Button>
                                ))
                            }
                            <Modal show={show}
                                // @ts-ignore
                                   fullscreen={fullscreen}
                                   onHide={() => setShow(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Domenii</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ModalBody/>
                                </Modal.Body>
                            </Modal>
                    </div>
                </div>
            </div>
        </section>
    );
}
// @ts-ignore
export default withNamespaces()(ProgramareServicii)
