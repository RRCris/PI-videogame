import "./components/styles/global.css";
import { Navbar } from "./components/NavBar";
import { Landing } from "./components/Landing";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Details } from "./components/Details";
import { FormUser } from "./components/FormUser";
import { FormLogIn } from "./components/FormLogIn";

function App() {
  return (
    <>
      {/*Persistira en toda la App*/}
      <Navbar />

      {/*Landig*/}
      <Route path="/" exact>
        <Landing />
      </Route>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/register">
          <FormUser />
        </Route>
        <Route path="/login">
          <FormLogIn />
        </Route>
      </Switch>
    </>
  );
}

export default App;
