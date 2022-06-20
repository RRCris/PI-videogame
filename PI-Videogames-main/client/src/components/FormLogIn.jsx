import "./styles/FormLogIn.css";

export function FormLogIn(props) {
  function handleButton(e) {
    let user = document.getElementById("inputUserName").value;
    let pass = document.getElementById("inputPassword").value;

    fetch(`http://localhost:3001/user?username=${user}&password=${pass}`)
      .then((r) => r.json())
      .then((r) => {
        if (r.err) {
          document.getElementById("inf").innerText = r.err;
        } else {
          console.log(r);
        }
      });
  }
  return (
    <div className="FormLogIn">
      <h1> you have full the spaces for log in</h1>
      <div className="containerInputs">
        <div className="groupInput">
          <input type="text" placeholder="Username" id="inputUserName" />
          <label>Username</label>
        </div>

        <div className="groupInput">
          <input type="text" placeholder="Password" id="inputPassword" />
          <label>Password</label>
        </div>

        <p id="inf"></p>
        <div className="containerButton">
          <button onClick={handleButton}>Log In</button>
        </div>
        <br />
        <br />
        <p>
          si no tienes cuenta primero <a href="/register">Registarte</a>
        </p>
      </div>
    </div>
  );
}
