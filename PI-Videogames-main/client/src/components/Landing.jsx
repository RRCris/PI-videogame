import "./styles/Landing.css";
import { Link } from "react-router-dom";
export function Landing(props) {
  return (
    <div className="Landing">
      <img
        src="https://image.winudf.com/v2/image1/Y29tLmVkc2FwcHMuZ2FtaW5nX3dhbGxwYXBlcnNfNGtfc2NyZWVuXzNfMTYxMzgyNjQ3NF8wMDA/screen-3.jpg?fakeurl=1&type=.webp"
        alt=""
      />
      <div className="groupWelcome">
        <h1>Welcome to GameWiki</h1>
        <Link to="/home">
          <button>Go To Home</button>
        </Link>
      </div>
    </div>
  );
}
