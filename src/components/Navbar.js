import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LanguageDropdown from './LanguageDropdown';
import { Link } from 'react-router-dom';

function bar() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="#brand">Wilson website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="#home">Home</Link>

            <Nav className="position-absolute top-0 end-0 mt-3 me-3 ">
            <LanguageDropdown />
            </Nav>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function CustomLink({ to, children, ...props }){
  const path =window.location.pathname
  return (
    <li className= {path === to ? "active": ""}>
      <Link to = {to} { ...props }>
        {children}
      </Link>
      </li>
  )
}

export default bar;