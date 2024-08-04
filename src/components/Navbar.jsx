import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import lockopen from "../assets/img/lockOpen.png";
import lock from "../assets/img/lock.png";

function NavBar() {
  const token = false;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Pizzeria Mamma Mia!</Navbar.Brand>
        <Nav className="me-auto">
          <Button variant="outline-light" className="text-white">
            🍕Home
          </Button>
          <Button variant="outline-light" className="text-white">
            <image src={token ? lockopen : lock}></image>
            {token ? "Profile" : "Register"}
          </Button>
          <Button variant="outline-light" className="text-white">
            <image src={token ? lockopen : lock}></image>
            {token ? "LogOut" : "Login"}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
