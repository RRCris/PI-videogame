import "./styles/Card.css";
import imgError from "../images/onerror.jpg";
import { Link } from "react-router-dom";
import { Details } from "./Details";

export function Card(props) {
  //por si las imagen no carga
  let onError = (e) => {
    if (e.target.src !== "../images/onerror.jpg") {
      e.target.src = imgError;
    }
  };

  //formateamos la respuesta
  let inf = {
    id: props.data.id,
    image: props.data.image,
    title: props.data.name,
    rating: props.data.rating,
    plataforms: props.data.plataforms.map((x) => x.name),
    genres: props.data.genres.map((x) => x.name),
  };

  //creamos una array
  let ret = [];
  for (let i = 0; i < 5; i++) {
    if (Math.floor(inf.rating) >= i + 1) {
      ret = ret.concat(<img className="starFill" alt="" />);
    } else ret = ret.concat(<img className="starUnfill" alt="" />);
  }

  return (
    <div className="Card">
      <Link to={`/details/${inf.id}`}>
        <div className="containerImages">
          <img
            src={inf.image[0] ? inf.image[0] : ""}
            className="firstImage"
            onError={onError}
            alt="primera imagen"
          />
          <img
            src={inf.image[1] ? inf.image[1] : ""}
            className="secondImage"
            onError={onError}
            alt="segunda imagen"
          />
        </div>
        <h2>{inf.title}</h2>
        <div className="containerGenres">
          {inf.genres.map((x) => (
            <>
              <p className="genre">{x}</p>
            </>
          ))}
        </div>
        <div className="containerScore">{ret}</div>
      </Link>
    </div>
  );
}
