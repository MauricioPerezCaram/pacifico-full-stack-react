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
            <Navbar.Brand href="#home">Inicio</Navbar.Brand>
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#link">Carrito</Nav.Link>
            <Nav.Link href="#link">Perfil</Nav.Link>
            <Nav.Link href="#link">Iniciar sesión</Nav.Link>
            <Nav.Link href="#link">Cerrar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;
