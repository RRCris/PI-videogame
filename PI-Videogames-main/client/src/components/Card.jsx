import "./styles/Card.css";

export function Card(props) {
  let inf = {
    image: [
      "https://thumbs.dreamstime.com/b/sello-de-goma-del-ejemplo-85561254.jpg",
      "https://www.mastermarketing-valencia.com/comunicacion-publicidad/wp-content/uploads/sites/4/2019/08/Ejemplo-tipograf%C3%ADa-Sans-serif.png",
    ],
    title: "this is a title",
    rating: 3.5,
    plataforms: [
      "xbox",
      "play",
      "nintendo",
      "atari",
      "pc",
      "android",
      "console",
    ],
    genres: ["adventure", "Action", "Indie", "Esport", "Simulation"],
  };

  let ret = [];
  if (Math.floor(inf.rating) >= 1)
    ret = ret.concat(<img className="starFill" alt="" />);
  else ret = ret.concat(<img className="starUnfill" alt="" />);
  if (Math.floor(inf.rating) >= 2)
    ret = ret.concat(<img className="starFill" alt="" />);
  else ret = ret.concat(<img className="starUnfill" alt="" />);
  if (Math.floor(inf.rating) >= 3)
    ret = ret.concat(<img className="starFill" alt="" />);
  else ret = ret.concat(<img className="starUnfill" alt="" />);
  if (Math.floor(inf.rating) >= 4)
    ret = ret.concat(<img className="starFill" alt="" />);
  else ret = ret.concat(<img className="starUnfill" alt="" />);
  if (Math.floor(inf.rating) === 5)
    ret = ret.concat(<img className="starFill" alt="" />);
  else ret = ret.concat(<img className="starUnfill" alt="" />);

  let iterPlataforms = (x) => {
    let p = "";
    switch (x) {
      case "xbox":
        p = "groupXbox";
        break;
      case "play":
        p = "groupPlay";
        break;
      case "nintendo":
        p = "groupNintendo";
        break;
      case "atari":
        p = "groupAtari";
        break;
      case "android":
        p = "groupAndroid";
        break;
      case "pc":
        p = "groupPC";
        break;
      case "console":
        p = "groupConsole";
        break;
      default:
        break;
    }
    return (
      <div className={p}>
        <img alt="" />
        <p />
      </div>
    );
  };
  //containerImages
  return (
    <div className="Card">
      <div className="containerImages">
        <img src={inf.image[0] ? inf.image[0] : ""} className="firstImage" />
        <img src={inf.image[1] ? inf.image[1] : ""} className="secondImage" />
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
    </div>
  );
}
