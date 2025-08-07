import { useEffect, useRef, useState } from "react";
import { CiMusicNote1 } from "react-icons/ci";
import "./Sonido.css";

function Sonido() {
  const audioRef = useRef(null);
  const [reproduciendo, setReproduciendo] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (reproduciendo) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setReproduciendo(!reproduciendo);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
      audio.loop = true;

      const intento = audio.play();
      if (intento !== undefined) {
        intento
          .then(() => setReproduciendo(true))
          .catch(() => {
            setReproduciendo(false);
          });
      }
    }
  }, []);

  return (
    <div className="sonido">
      <audio ref={audioRef}>
        <source src="/musica-boda.m4a" type="audio/mp4" />
        <source src="/musica-boda.mp3" type="audio/mpeg" />
        Tu navegador no soporta audio HTML5.
      </audio>
      <button
        onClick={toggleAudio}
        className="boton-sonido"
        aria-label="Reproducir música"
      >
        <CiMusicNote1 size={22} />
      </button>
    </div>
  );
}

export default Sonido;
