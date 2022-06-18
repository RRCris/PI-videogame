import "./styles/Home.css";
import { Card } from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getfirst100 } from "../redux/actions";
import { Loader } from "./Loader";
import { Filter } from "./Filter";

export function Home() {
  let store = useSelector((store) => store);
  let results = store.first100;
  let dispatch = useDispatch();
  if (results.length === 0) {
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
      <div className="containerFilters">
        <Filter />
      </div>
      <div className="containerCards">
        {results.length === 0 ? (
          <Loader />
        ) : (
          results.map((x) => <Card key={x.id} data={x} />)
        )}
      </div>
    </div>
  );
}
