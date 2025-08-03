import "./App.css";
import Countdown from "./components/Countdown";
import Carrusel from "./components/Carrusel";
import Sonido from "./components/Sonido";
import Timeline from "./components/Timeline";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function App() {
  return (
    <div className="boda-container">
      <Sonido />
      <section className="hero-portada">
        <div className="overlay"></div>
        <img src="/portada-boda.jpg" alt="María y Juan" className="hero-img" />
      </section>

      <section className="presentacion-boda">
        <h1>¡Sí, para siempre!</h1>
        <h2>Rufina & Ariel</h2>
        <p className="fecha-boda">15 de junio de 2026</p>
        <h2>¡Nos casamos!</h2>
      </section>

      <section className="cuenta-regresiva">
        <h2>Faltan...</h2>
        <Countdown targetDate="2026-04-12T18:00:00" />
      </section>
      <section className="bienvenida">
        <h2>¡Querida familia y amigos!</h2>
        <p>
          Estamos muy emocionados de compartir con ustedes este momento tan
          especial. Será un día lleno de amor, alegría y buenos momentos. ¡Los
          esperamos para celebrar juntos!
        </p>
      </section>
      <section className="galeria">
        <h2>Algunas fotos</h2>
        <Carrusel />
      </section>
      <Timeline />

      <section className="evento">
        <h2>Detalles del evento</h2>
        <h3>
          <span className="badge-icon">
            <FaCalendarAlt />
          </span>
          Fecha: 12 de abril de 2026
        </h3>
        <h3>
          <span className="badge-icon">
            <FaMapMarkerAlt />
          </span>
          Iglesia San Miguel, Córdoba
        </h3>
        <h3>
          <span className="badge-icon">
            <FaClock />
          </span>
          14:00 hs
        </h3>
        <a
          href="https://www.google.com/maps?q=Iglesia+San+Miguel+Córdoba"
          target="_blank"
          rel="noopener noreferrer"
          className="boton-mapa"
        >
          Ver ubicación
        </a>
      </section>

      <section className="formulario">
        <h2>¿Nos acompañás?</h2>
        <p>Confirmá tu asistencia antes del 1º de abril</p>

        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe5ndg2m-H7492q1fh-VaeTTpxGw5-uSxUWKDokxmpFE6E9QQ/formResponse"
          method="POST"
          target="_blank"
        >
          <input
            type="text"
            name="entry.877086558"
            placeholder="Tu nombre y apellido"
            required
          />
          <input
            type="text"
            name="entry.1498135098"
            placeholder="¿Cuántas personas vienen?"
            required
          />
          <input
            type="text"
            name="entry.1424661284"
            placeholder="¿Tenés alguna restricción alimentaria?"
          />
          <input
            type="text"
            name="entry.2606285"
            placeholder="Un mensaje para los novios ❤️"
          />
          <br />
          <button type="submit" className="boton-confirmar">
            Confirmar asistencia
          </button>
        </form>
      </section>

      <section className="formulario">
        <h2>🎶 ¡Ayudanos a elegir la música!</h2>
        <p>¿Qué canciones no pueden faltar en la fiesta?</p>

        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSfI19stBgqHOimdRCs_7hYzCZYQiQ5GekjpdXEPkyzo4Y0Rfg/formResponse"
          method="POST"
          target="_blank"
        >
          <input
            type="text"
            name="entry.1498135098"
            placeholder="Tu nombre"
            required
          />
          <textarea
            name="entry.877086558"
            placeholder="Escribí tus canciones favoritas 🎧"
            required
          ></textarea>
          <br />
          <button type="submit" className="boton-confirmar">
            Enviar sugerencia
          </button>
        </form>
      </section>

      <footer className="footer">
        <p>"El amor todo lo puede, todo lo espera..."</p>
        <h3>Con amor, María & Juan</h3>
      </footer>
    </div>
  );
}

export default App;
