import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function BarraNavegacion() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/productos">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/creaunproducto">
              Crea un producto
            </Nav.Link>
            <Nav.Link as={Link} to="/carrito">
              Carrito
            </Nav.Link>
            <Nav.Link as={Link} to="/registrate">
              Registrate
            </Nav.Link>
            <Nav.Link as={Link} to="/usuarios">
              Usuarios
            </Nav.Link>
            <Nav.Link as={Link} to="/perfil">
              Perfil
            </Nav.Link>
            <Nav.Link as={Link} to="/iniciarsesión">
              Iniciar sesión
            </Nav.Link>
            <Nav.Link as={Link} to="/cerrarsesión">
              Cerrar sesión
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;
