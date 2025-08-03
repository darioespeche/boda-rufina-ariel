import { useState } from "react";
import "./Carrusel.css";

const imagenes = [
  "/fotos/foto1.jpg",
  "/fotos/foto2.jpg",
  "/fotos/foto3.jpg",
  "/fotos/foto4.jpg",
  "/fotos/foto5.jpg",
];

function Carrusel() {
  const [index, setIndex] = useState(0);

  const anterior = () => {
    setIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carrusel">
      <img
        src={imagenes[index]}
        alt={`Foto ${index + 1}`}
        className="carrusel-img"
      />
      <div className="carrusel-controles">
        <button onClick={anterior}>◀</button>
        <button onClick={siguiente}>▶</button>
      </div>
    </div>
  );
}

export default Carrusel;
