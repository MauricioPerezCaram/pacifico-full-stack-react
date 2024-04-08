import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CrearUsuario() {
  const [usuario, setUsuario] = useState({
    name: "",
    lastname: "",
    email: "",
    photo: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/users", usuario)
      .then((res) => {
        console.log("Usuario creado:", res.data);
        setUsuario({
          name: "",
          lastname: "",
          email: "",
          photo: "",
          role: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Form className="w-25" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            value={usuario.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastname">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            required
            value={usuario.lastname}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            value={usuario.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Foto</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            value={usuario.photo}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Rol</Form.Label>
          <Form.Control
            type="text"
            name="role"
            value={usuario.role}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Agregar usuario
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CrearUsuario;
