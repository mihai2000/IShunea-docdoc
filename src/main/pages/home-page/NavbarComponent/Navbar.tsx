import React from "react";
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Nav, Navbar} from "react-bootstrap";
import {withNamespaces} from "react-i18next";
import '../../../../i18next/i18n';
// @ts-ignore
function NavbarComponent({t}) {
    return (
        <>
            {[false].map((expand) => (
                <Navbar expand="lg" className="navbarBody">
                    <Container>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            className="navbarBody"
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start">
                            <Offcanvas.Header closeButton/>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center  buton-group">
                                     <Nav.Link href="/Institutii/Center" className="link">{t('Navbar.CentreMed')}</Nav.Link>
                                     <Nav.Link href="/Institutii/Diagnostic" className="link">{t('Navbar.Diagnostic')}</Nav.Link>
                                     <Nav.Link href="/Institutii/Laborator" className="link">{t('Navbar.Laboratoare')}</Nav.Link>
                                     <Nav.Link href="/Institutii/Stomatologie" className="link">{t('Navbar.Stomatologii')}</Nav.Link>
                                     <Nav.Link href="/Institutii/Cosmetologie" className="link">{t('Navbar.Cosmetologie')}</Nav.Link>
                                     <Nav.Link href="/Institutii/Center" className="link">{t('Navbar.CentreMed')}</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

// @ts-ignore
export default withNamespaces()(NavbarComponent);
