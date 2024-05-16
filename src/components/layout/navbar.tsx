import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBS from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBS expand="lg" className="bg-body-tertiary mb-3">
      <Container>
        <NavbarBS.Brand href="#home">React-Bootstrap</NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Blog
            </Nav.Link>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}

export default Navbar;