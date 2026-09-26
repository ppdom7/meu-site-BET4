import { useEffect, useRef, useState } from "react";
import { banners } from "../data/catalog";

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % banners.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (i: number) => {
    setIndex(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
  };

  return (
    <section className="hero">
      <div className="hero-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {banners.map((b) => (
          <div className="hero-slide" key={b.id}>
            <img src={b.image} alt={b.alt} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="hero-dots">
        {banners.map((b, i) => (
          <button
            key={b.id}
            className={`hero-dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Banner ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
