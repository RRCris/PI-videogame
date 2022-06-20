import { Link } from "react-router-dom";
import "./styles/NavBar.css";
export function Navbar() {
  return (
    <div className="navBar">
      <div className="contentUser">
        <button>Log In</button>
        <Link
          to="/register"
          style={{ background: "var(--back-color-primary)", height: "40px" }}
        >
          <button className="buttonOptinal">Registrer me</button>
        </Link>
      </div>
      <div className="contentButtons">
        <Link
          to="/home"
          style={{ background: "var(--back-color-primary)", height: "40px" }}
        >
          <button className="buttonNav">Home</button>
        </Link>
        <button className="buttonNav">About me</button>
        <button className="buttonNav">Genres</button>
        <button className="buttonNav">Plataforms</button>
      </div>
    </div>
  );
}
