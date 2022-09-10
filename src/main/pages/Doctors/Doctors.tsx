import React, {useState} from "react";
import './Doctors.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "./Modal/Modal";

export default function Doctors() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className="row doc-info">
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 doc-info__content">
                <div className="row">
                    <div className="col-xs-12 doc-info-foto">
                        <div className="doc-foto"></div>
                    </div>
                    <div className="doc-info-text">
                        <div className="row basic-info-stats">
                            <div className="basic-info">
                                <h1>Viorica Cucobco </h1>
                                <h2>Acupunctor</h2>
                                <h3>Experiența 21 ani / Medic categorie superioara</h3>

                                <Button className="basic-info-button" onClick={handleShow}>
                                    <div>
                                        <img src="http://www.docdoc.md/static/img/icontrianglewhite.png"
                                             alt="iconphonewhite"/>
                                        <h1>Programare la consultație</h1>
                                    </div>
                                </Button>
                                <Modal show={show} onHide={handleClose} animation={true}>
                                    <Modal.Header closeButton>
                                        <h1>Contact Us</h1>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <ModalBody/>
                                    </Modal.Body>
                                </Modal>
                                <h4>Prețul consultației - 450 lei</h4>
                                <p>Primește copii</p>
                            </div>
                            <div className="basic-stats">
                                <div className="row comments-rating">
                                    <div className="basic-stats-coments">
                                        <h1>2</h1>
                                        <h2>comentarii</h2>
                                    </div>
                                    <div className="basic-stats-rating">
                                        <h1>7<span className="Second"/>.48</h1>
                                        <h2>Rating</h2>
                                    </div>
                                </div>
                                <div className="row basic-stats-title">
                                    <h1>Program de lucru:</h1>
                                </div>
                                <div className="row schedule">
                                    <div className="schedule-day">
                                        <ul>
                                            <li>Luni</li>
                                            <li>Marţi</li>
                                            <li>Miercuri</li>
                                            <li>Joi</li>
                                            <li>Vineri</li>
                                            <li>Sâmbătă</li>
                                            <li>Duminică</li>
                                        </ul>
                                    </div>
                                    <div className="schedule-hour">
                                        <ul>
                                            <li>12:00 - 15:00</li>
                                            <li>12:00 - 15:00</li>
                                            <li>12:00 - 15:00</li>
                                            <li>12:00 - 15:00</li>
                                            <li>12:00 - 15:00</li>
                                            <li>zi liberă</li>
                                            <li>zi liberă</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="primary-consult">
                            <h1>Consultaţia primară include:</h1>
                            <h1 className="sub-h">Consultarea,examinarea,prescrierea tratamentului si prima procedura de
                                acupunctura </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
