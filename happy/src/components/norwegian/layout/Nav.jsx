import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-bootstrap/esm/NavLink';
import HHCLogo from "../../../images/HHCLogo.png";  
import HHCText from "../../../images/Name.png";

export const NAV = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <NavLink to="/" className="brand-logo">
                <img src={HHCLogo} alt="Happy Hearts Care Logo" className="brand-logo-image"/>
            </NavLink>
            <NavLink to="/" className="nav-link" id="avoid-active">
                <img src={HHCText} alt="Happy Hearts Care" className="brand-logo-text" />
            </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
            Hilsner
            </NavLink>
            <NavDropdown title="Prosjekter" id="basic-nav-dropdown">
              <NavDropdown.Item to="/">Ernæring</NavDropdown.Item>
              <NavDropdown.Item to="/">Utdannelse</NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/" className="nav-link">
            Om oss
            </NavLink>
            <NavLink to="/" className="nav-link-btn">
            Bli med
            </NavLink>
            <NavLink to="/" className="nav-link-btn">
            Gi en gave
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}