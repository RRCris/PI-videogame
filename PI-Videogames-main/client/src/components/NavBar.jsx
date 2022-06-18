import "./styles/NavBar.css";
export function Navbar() {
  return (
    <div className="navBar">
      <div className="contentUser">
        <button>Log In</button>
        <button className="buttonOptinal">Registrer me</button>
      </div>
      <div className="contentButtons">
        <button className="buttonNav">Home</button>
        <button className="buttonNav">About me</button>
        <button className="buttonNav">Genres</button>
        <button className="buttonNav">Plataforms</button>
      </div>
    </div>
  );
}
