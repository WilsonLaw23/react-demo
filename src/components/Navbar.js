import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LanguageDropdown from './LanguageDropdown';
import { Link } from 'react-router-dom';

function bar() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="brand">Wilson website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">

        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
              <Nav.Link>
            <Link to="home">Home</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="about">About</Link>
            </Nav.Link>
            </Nav>
            <LanguageDropdown />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default bar;