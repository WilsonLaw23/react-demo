import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LanguageDropdown from './LanguageDropdown';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function bar() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="brand"><FormattedMessage id="brand"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">

        <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll>
              <Nav.Link>
            <Link to="home"><FormattedMessage id="home"/></Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="about"><FormattedMessage id="about"/></Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="Whattodo"><FormattedMessage id="whattodo"/></Link>
            </Nav.Link>
            </Nav>
            <LanguageDropdown />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default bar;