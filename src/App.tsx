import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import FeatureStrip from "./components/FeatureStrip";
import GameGrid from "./components/GameGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <HeroBanner />
        <FeatureStrip />
        <GameGrid />
      </main>
      <Footer />
    </>
  );
}
