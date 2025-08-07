import { useState, useEffect } from "react";
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

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="carrusel">
      <img
        src={imagenes[index]}
        alt={`Foto ${index + 1}`}
        className="carrusel-img"
      />
    </div>
  );
}

export default Carrusel;
