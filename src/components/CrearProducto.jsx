import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CrearProducto() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
          <Form.Label>Producto</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
          <Form.Label>Categoría</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
          <Form.Label>Stock</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar producto
        </Button>
      </Form>
    </div>
  );
}

export default CrearProducto;
