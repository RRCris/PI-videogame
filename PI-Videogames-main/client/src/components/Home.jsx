import "./styles/Home.css";
import { Card } from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getfirst100 } from "../redux/actions";

export function Home() {
  let store = useSelector((store) => store.first100);
  let dispatch = useDispatch();
  console.log(store);
  if (store.length === 0) {
    getfirst100(dispatch);
  }
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
        {store.length === 0 ? (
          <h1>No hay elementos</h1>
        ) : (
          store.map((x) => <Card key={x.id} data={x} />)
        )}
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
}
