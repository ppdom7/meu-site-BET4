const features = [
  {
    title: "Pagamento Instantâneo",
    desc: "Saque em segundos, 24 horas por dia.",
    icon: "bolt",
  },
  {
    title: "Bônus Exclusivos",
    desc: "Promoções semanais e recarga recorrente.",
    icon: "gift",
  },
  {
    title: "Suporte 24/7",
    desc: "Atendimento humano a qualquer hora.",
    icon: "headset",
  },
  {
    title: "100% Seguro",
    desc: "Plataforma licenciada e protegida.",
    icon: "shield",
  },
];

export default function FeatureStrip() {
  return (
    <section className="features">
      {features.map((f) => (
        <div className="feature-card" key={f.title}>
          <div className="feature-icon">
            <FeatureIcon name={f.icon} />
          </div>
          <div className="feature-text">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const p = { width: 24, height: 24, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
        </svg>
      );
    case "gift":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <rect x="3" y="8" width="18" height="13" rx="1" />
          <path d="M3 12h18M12 8v13M12 8C9 8 7 6 7 4a2 2 0 0 1 4 0v4M12 8c3 0 5-2 5-4a2 2 0 0 0-4 0v4" />
        </svg>
      );
    case "headset":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
          <rect x="2" y="14" width="4" height="6" rx="1" />
          <rect x="18" y="14" width="4" height="6" rx="1" />
          <path d="M20 20a4 4 0 0 1-4 3h-4" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <path d="M12 2l8 3v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V5z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}
