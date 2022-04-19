import {Container, Nav, Navbar} from "react-bootstrap";
import './Header.css';

function Header(){
    return(
        <Navbar id={"navigation"}collapseOnSelect expand="lg" bg="dark" variant="dark" fixed={"top"}>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about">A propos de moi</Nav.Link>
                        <Nav.Link href="#myCareer">Mon parcours</Nav.Link>
                        <Nav.Link href="#contact">Me contacter</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;