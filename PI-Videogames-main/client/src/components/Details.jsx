import "./styles/Details.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetails } from "../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import imgError from "../images/onerror.jpg";

export function Details() {
  //use the hoocks
  let id = useParams().id;
  let dispatch = useDispatch();
  let details = useSelector((state) => state.details);
  useEffect(() => {
    if (details.id != undefined) {
      document.getElementById("description").innerHTML = details.description;
    }
    console.log(details);
    let arrImg = details.image || [];
    let containerImages = document.getElementById("containerImages");
    let containerButtons = document.getElementById("containerButtons");

    function chanceImage(num) {
      if (num > arrImg.length - 1) num = 0;
      for (let image of containerImages.children) {
        if (image.id == "image " + num) {
          image.className = "imageIn";
        } else {
          image.className = "imageOff";
        }
      }
    }
    for (let n_url in arrImg) {
      let object = document.createElement("img");
      object.id = "image " + n_url;
      if (n_url == 0) object.className = "imageIn";
      else object.className = "imageOff";
      object.src = arrImg[n_url];
      object.addEventListener("error", onError);
      containerImages.appendChild(object);

      let button = document.createElement("div");
      button.className = "buttonOn";
      button.addEventListener("click", (e) => {
        for (let but of containerButtons.children) {
          but.className = "buttonOn";
        }
        e.target.className = "buttonOff";
        chanceImage(n_url);
      });
      containerButtons.appendChild(button);
    }
  }, [details]);

  //get data
  if (details.id !== parseInt(id)) {
    getDetails(dispatch, id);
  }

  //por si las imagen no carga
  let onError = (e) => {
    if (e.target.src !== "../images/onerror.jpg") {
      e.target.src = imgError;
    }
  };
  let iterPlataforms = (x) => {
    let p = "";
    if (x.name.toLowerCase().includes("xbox")) p = "groupXbox";
    else if (x.name.toLowerCase().includes("play")) p = "groupPlay";
    else if (x.name.toLowerCase().includes("nintendo")) p = "groupNintendo";
    else if (x.name.toLowerCase().includes("atari")) p = "groupAtari";
    else if (x.name.toLowerCase().includes("android")) p = "groupAndroid";
    else if (x.name.toLowerCase().includes("pc")) p = "groupPC";
    else if (x.name.toLowerCase().includes("mac")) p = "groupPC";
    else if (x.name.toLowerCase().includes("linux")) p = "groupPC";
    else if (x.name.toLowerCase().includes("apple")) p = "groupPC";
    else p = "groupConsole";

    return (
      <div className={p}>
        <img alt="" />
        <p>{x.name}</p>
      </div>
    );
  };

  //creamos una array
  let ret = [];
  for (let i = 0; i < 5; i++) {
    if (Math.floor(details.rating) >= i + 1) {
      ret = ret.concat(<img className="starFill" alt="" />);
    } else ret = ret.concat(<img className="starUnfill" alt="" />);
  }
  if (details.id !== undefined) {
    return (
      <div className="Details">
        <Link to="/home">
          <div>
            <button>Go to Back</button>
          </div>
        </Link>

        <div className="header">
          <h1>{details.name}</h1>
          <h2>{"Launch on: " + details.launch}</h2>

          <div className="containerGalery">
            <div id="containerButtons"></div>
            <div id="containerImages"></div>
          </div>
        </div>
        <div className="containerPlataforms">
          {details.plataform.map(iterPlataforms)}
        </div>
        <div className="moreInfo">
          <p id="description"></p>

          <div className="containerGenres">
            {details.genres.map((x) => (
              <p className="genre">{x.name}</p>
            ))}
          </div>
        </div>
        <div className="containerStar">
          <h2>{"👨‍👧‍👧 : " + details.rating_count + " "}</h2>
          {ret}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>No existe ninguna informacion</h1>
      </div>
    );
  }
}
