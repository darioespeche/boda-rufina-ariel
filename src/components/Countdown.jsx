import { useEffect, useState } from "react";

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = new Date(targetDate) - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft === null) {
    return <p>¡Hoy es el gran día! 🎉</p>;
  }

  return (
    <h3>
      {timeLeft.days} días, {timeLeft.hours}h {timeLeft.minutes}m{" "}
      {timeLeft.seconds}s
    </h3>
  );
}

export default Countdown;
