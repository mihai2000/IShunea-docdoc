import React from "react";
import './Navbar.css';
import {Nav, Navbar} from "react-bootstrap";

export default function NavbarComponent() {
    return (
        <div className="navbarBody">
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="#home"/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto buton-group">
                        <Nav.Link href="/Institutii/Center" className="link">Spitale și Centre medicale</Nav.Link>
                        <Nav.Link href="/Institutii/Diagnostic" className="link">Centre de diagnostic</Nav.Link>
                        <Nav.Link href="/Institutii/Laborator" className="link">Laboratoare</Nav.Link>
                        <Nav.Link href="/Institutii/Stomatologie" className="link">Stomatologii</Nav.Link>
                        <Nav.Link href="/Institutii/Cosmetologie" className="link">Medicină estetică</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
