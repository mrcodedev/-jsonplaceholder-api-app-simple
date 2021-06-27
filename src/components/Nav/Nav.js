import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" && (
        <nav>
          <Link to="/albums/">All Albums</Link>
          <Link to="/album/single/1">Single Album</Link>
          <Link to="/album/create">Create Album</Link>
          <Link to="/album/put">Put Album</Link>
          <Link to="/album/patch">Patch Album</Link>
          <Link to="/album/delete">Delete Album</Link>
        </nav>
      )}

      {location.pathname !== "/" && (
        <div>
          <Link to="/">Go back</Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
