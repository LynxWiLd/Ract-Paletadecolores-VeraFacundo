import { Card, Button } from "react-bootstrap";

const Lista = ({ color, borrarColor }) => {
  return (
    <Card className="shadow-sm text-center">
      <Card.Body className="bg-light">
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: color,
            margin: "auto",
            border: "1px solid #ccc",
          }}
        ></div>
        <Card.Title className="mt-2">Nombre color</Card.Title>
        <p>{color}</p>
      </Card.Body>
      <Card.Footer>
        <Button variant="danger" onClick={() => borrarColor(color)}>
          Borrar
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Lista;
