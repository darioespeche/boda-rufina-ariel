import "./Timeline.css";
import {
  FaChurch,
  FaCocktail,
  FaBus,
  FaGlassCheers,
  FaBirthdayCake,
  FaMask,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";

function Timeline() {
  const eventos = [
    { hora: "2:00 pm", texto: "Sí, quiero! Religioso", icono: <FaChurch /> },
    { hora: "3:40 pm", texto: "Camino a la fiesta", icono: <FaBus /> },
    {
      hora: "5:30 - 6:40 pm",
      texto: "Cocktail bienvenida",
      icono: <FaCocktail />,
    },
    { hora: "7:00 pm", texto: "Novios entrada triunfal", icono: <FaUsers /> },
    {
      hora: "7:30 pm",
      texto: "Presentación y bienvenida",
      icono: <FaMask />,
    },
    { hora: "8:00 - 9:00 pm", texto: "Cena", icono: <FaUtensils /> },
    {
      hora: "9:00 pm",
      texto: "Hora de la torta y palabras de familia",
      icono: <FaBirthdayCake />,
    },
    { hora: "9:30 pm", texto: "Brindis", icono: <FaGlassCheers /> },
    {
      hora: "10:15 pm",
      texto: "Baile y fiesta",
      icono: <FaMask />,
    },
  ];

  return (
    <section className="timeline-section">
      <h2>Programa del Evento</h2>
      <ul className="timeline-list">
        {eventos.map((e, index) => (
          <li key={index} className="timeline-item">
            <span className="timeline-time">{e.hora}</span>
            <span className="timeline-icon">{e.icono}</span>
            <span className="timeline-text">{e.texto}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Timeline;
