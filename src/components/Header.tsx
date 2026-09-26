import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <div className="logo">
          <span className="logo-mark">GP</span>
          <span className="logo-text">GreenPlay</span>
        </div>

        <nav className={`main-nav ${mobileOpen ? "open" : ""}`}>
          <a href="#home" className="nav-link active">Início</a>
          <a href="#sports" className="nav-link">Esportes</a>
          <a href="#casino" className="nav-link">Cassino</a>
          <a href="#promotions" className="nav-link">Promoções</a>
          <a href="#vip" className="nav-link">VIP</a>
          <a href="#support" className="nav-link">Suporte</a>
        </nav>

        <div className="header-actions">
          <button className="btn-ghost">Entrar</button>
          <button className="btn-primary">Registrar</button>
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
