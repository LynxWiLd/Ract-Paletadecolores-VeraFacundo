import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {
  const [colores, setColores] = useState([]);

  // Cargar colores del localStorage al iniciar
  useEffect(() => {
    const coloresGuardados = JSON.parse(localStorage.getItem("colores")) || [];
    setColores(coloresGuardados);
  }, []);

  // Guardar colores en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("colores", JSON.stringify(colores));
  }, [colores]);

  // Función para agregar un nuevo color
  const agregarColor = (nuevoColor) => {
    if (nuevoColor.trim() === "") return;
    setColores([...colores, nuevoColor]);
  };

 // Función para borrar un color
  const borrarColor = (colorAEliminar) => {
    const nuevosColores = colores.filter((c) => c !== colorAEliminar);
    setColores(nuevosColores);
  }
  
  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Administrar colores</h2>

      <Formulario agregarColor={agregarColor} />
       
      <Row className="mt-4"> 
        {colores.map((color, index) => (
          <Col md={4} key={index} className="mb-3">
            <Lista color={color} borrarColor={borrarColor} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;

