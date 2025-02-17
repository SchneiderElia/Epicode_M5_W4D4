import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

function Mynav() {
  return (
      <Navbar id='nav' bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>EPIBOOKS</Navbar.Brand>
          <Nav className="justyfy-content-end">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/AboutUs'>AboutUs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Mynav;