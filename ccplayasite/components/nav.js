import { Container, Navbar, NavbarBrand, NavItem, NavLink } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import Nav from 'react-bootstrap/Nav';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

const nav = () => {
    return (
        <Nav id="scrolly-navbar" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Container className="container-fluid">
                <NavbarBrand className="navbar-brand" href="#contacto" style={{ color: '#748a6a' }}>
                    Confecciones Colombia
                </NavbarBrand>
                <NavbarToggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </NavbarToggle>
                <NavbarCollapse className="collapse navbar-collapse" id="navbarNav">
                    <Navbar className="navbar-nav">
                        <NavItem className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" href="#decoracion">Decoración</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="#tapiceria">Tapicería</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="#cojineria">Cojinería</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="#hoteleria">Hotelería</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="#bares">Bares & Restaurantes</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="#colchonetas">Colchonetas</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="#buceo">Buceo</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="#fundas">Fundas</NavLink>
                        </NavItem>
                    </Navbar>
                </NavbarCollapse>
            </Container>
        </Nav>
    );
}

export default nav;