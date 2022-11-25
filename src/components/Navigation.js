import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{color: 'azure', fontFamily:'Century Bold', margin:'0px 40px 0px 40px', fontSize:'35px'}}>SIGIT RENDANG</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex" style={{width: '600px', margin: 'auto'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
        <Nav.Link href="/profile" style={{color: 'white', fontSize:'20px', margin:'0px 10px 0px 30px'}}>Profile</Nav.Link>
        <Nav.Link href="/login" style={{color: 'white', fontSize:'20px', margin:'0px 10px 0px 30px'}}>Login</Nav.Link>
        <Nav.Link href="/register" style={{color: 'white', fontSize:'20px', margin:'0px 10px 0px 30px'}}>Register</Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;