import "./styles/FormUser.css";

export function FormUser() {
  return (
    <div className="FormUser">
      <h1>llena los datos para registrar</h1>
      <div className="containerInputs"></div>

      <div className="groupInputValid groupInputValid_checked">
        <input type="text" placeholder="Email" required />
        <label className="name">Email</label>
        <img className="icon" alt="icon" />
        <label className="message">Esto es un mensaje</label>
      </div>
    </div>
  );
}
