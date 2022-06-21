import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../redux/actions";
export function DetailsDebbug() {
  let dispatch = useDispatch();
  let id = useParams().id;
  let details = useSelector((state) => state.details);
  console.log(details.id, id);
  if (details.id.toString() !== id) {
    getDetails(dispatch, id);
  } else {
    let img = document.getElementById("image");
    console.log(details.image);
    console.log(img);
    if (details.id.toString()[0] === "R") {
      img.setAttribute("src", atob(details.image));
    } else {
      img.setAttribute("src", details.image[0]);
    }
  }
  return (
    <div>
      <img
        id="image"
        alt=""
        src="https://thumbs.dreamstime.com/b/vector-de-barra-progreso-carga-que-muestra-el-porcentaje-completado-en-198360230.jpg"
      />
    </div>
  );
}
