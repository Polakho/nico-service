import React from "react";
import {Link} from "react-router-dom";
import "./entete.css"
import {Navbar, Nav, Container} from "react-bootstrap";

const Entete= () => {

    return (
        <Navbar className={"navBar"}  variant="dark">
            <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href={"/"}>Acceuil</Nav.Link>
                    <Nav.Link href={"/devis"}>Devis</Nav.Link>
                    <Nav.Link href={"/contact"}>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Entete