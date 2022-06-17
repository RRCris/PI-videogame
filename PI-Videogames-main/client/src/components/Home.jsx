import "./styles/Home.css";
import { Card } from "./Card";
export function Home() {
  return (
    <div className="Home">
      <div className="Header">
        <h1>You Can Find All Games Here</h1>
        <p>
          This is a page that will help you find your favorite games and find
          some gems, there is everything here!
        </p>
      </div>
      <div className="containerCards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
