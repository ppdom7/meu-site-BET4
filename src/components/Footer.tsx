const footerLinks = [
  { title: "Plataforma", links: ["Esportes", "Cassino", "Cassino ao Vivo", "Torneios"] },
  { title: "Promoções", links: ["Boas-vindas", "Recarga", "Cashback", "Indicação"] },
  { title: "Suporte", links: ["Central de Ajuda", "Contato", "Como Depositar", "Como Sacar"] },
  { title: "Legal", links: ["Termos de Uso", "Privacidade", "Jogo Responsável", "Licença"] },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-mark">GP</span>
            <span className="logo-text">GreenPlay</span>
          </div>
          <p className="footer-tagline">
            Plataforma de entretenimento demonstrativa. Sem apostas reais, sem pagamentos.
          </p>
        </div>

        <div className="footer-links">
          {footerLinks.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>+18 Entretenimento exclusivo para maiores de 18 anos.</span>
        <span>Demonstração visual — sem transações reais.</span>
      </div>
    </footer>
  );
}
