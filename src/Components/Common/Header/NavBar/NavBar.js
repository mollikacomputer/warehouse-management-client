import { getAuth } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const auth = getAuth();
  const user = auth?.currentUser;
  const userName = user?.displayName;
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Grocery Dealer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" defaultActiveKey="/" className="me-auto">
              <Nav.Link as={Link} eventKey="link-1" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} eventKey="link-2" to="/login">
                LogIn
              </Nav.Link>
              <Nav.Link as={Link} eventKey="link-3" to="/register">
                Register
              </Nav.Link>
              <Nav.Link as={Link} eventKey="link-4" to="/inventory">
                Inventory
              </Nav.Link>
              <Nav.Link>{userName}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
