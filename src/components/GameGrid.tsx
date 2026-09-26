import CategoryTabs from "./CategoryTabs";
import GameCard from "./GameCard";
import { games } from "../data/catalog";

export default function GameGrid() {
  return (
    <section className="game-section" id="casino">
      <div className="section-head">
        <h2 className="section-title">
          <span className="title-bar"></span>
          Jogos Populares
        </h2>
        <a href="#all" className="see-all">Ver todos</a>
      </div>

      <CategoryTabs />

      <div className="game-grid">
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </section>
  );
}
