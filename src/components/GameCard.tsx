import type { Game } from "../data/catalog";

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="game-card">
      <div className="game-thumb">
        <img src={game.icon} alt={game.name} loading="lazy" />
        {game.tag && <span className={`game-tag tag-${game.tag.toLowerCase()}`}>{game.tag}</span>}
        <div className="game-overlay">
          <button className="play-btn">Jogar</button>
        </div>
      </div>
      <div className="game-info">
        <span className="game-name">{game.name}</span>
        <span className="game-provider">{game.provider === "pg" ? "PG Soft" : "TaDa"}</span>
      </div>
    </div>
  );
}
