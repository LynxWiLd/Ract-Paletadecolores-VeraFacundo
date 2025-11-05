import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const Formulario = ({ agregarColor }) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarColor(color);
    setColor("");
  };

  return (
    <Card>
      <Card.Body className="bg-light">
        <Form onSubmit={handleSubmit} className="d-flex align-items-center gap-3">
          <div
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: color || "transparent",
              border: "1px solid #ccc",
            }}
          ></div>

          <Form.Control
            type="text"
            placeholder="Ingrese un color ej: Blue"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <Button type="submit" variant="primary">
            Guardar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Formulario;
