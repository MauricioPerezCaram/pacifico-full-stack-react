import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BarraNavegacion() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#creaunproducto">Crea un producto</Nav.Link>
            <Nav.Link href="#carrito">Carrito</Nav.Link>
            <Nav.Link href="#registrate">Registrate</Nav.Link>
            <Nav.Link href="#perfil">Perfil</Nav.Link>
            <Nav.Link href="#iniciarsesión">Iniciar sesión</Nav.Link>
            <Nav.Link href="#cerrarsesión">Cerrar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;
