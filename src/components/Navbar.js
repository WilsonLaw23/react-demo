import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LanguageDropdown from './LanguageDropdown';

function bar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#brand">Wilson website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <Nav className="position-absolute top-0 end-0 mt-3 me-3 ">
            <LanguageDropdown />
            </Nav>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default bar;