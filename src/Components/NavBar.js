import React from 'react'
import './NavBar.css'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import NasaImg from '../Assets/Images/nasaImg.png'
import UserInputOffCanvas from './UserInputOffCanvas'

function NavBar(props) {
    const { setStartDateHandler, setEndDateHandler,setStartDate, setEndDate, startDate, endDate, submitButtonHAndler } = props 
    const codeRepo = "https://github.com/pkaseta/shopify-nasa-api-assessment"
    const nasaApiDocs = "https://api.nasa.gov/"

    return (
        <Navbar expand="lg" variant='light'>
            <Container>
                <Navbar.Brand onClick={() => window.location.reload(true)}>
                    <img id='nasa-logo-img' src={NasaImg} alt="Nasa Logo" />
                    Spacetagram
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       <Nav.Link href={codeRepo}>GitHub Repo</Nav.Link>
                       <Nav.Link href={nasaApiDocs}>NASA API Docs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
