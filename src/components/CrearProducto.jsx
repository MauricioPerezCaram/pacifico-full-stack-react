import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CrearProducto() {
  const [producto, setProducto] = useState({
    title: "",
    category: "",
    price: "",
    stock: "",
    photo: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prevProducto) => ({
      ...prevProducto,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/products", producto)
      .then((res) => {
        setProducto({
          title: "",
          category: "",
          price: "",
          stock: "",
          photo: "",
          description: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form className="w-25" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Producto</Form.Label>
          <Form.Control
            type="text"
            name="title"
            required
            value={producto.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={producto.category}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="price"
            required
            value={producto.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicStock">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            name="stock"
            value={producto.stock}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            value={producto.photo}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={producto.description}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Agregar producto
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CrearProducto;
