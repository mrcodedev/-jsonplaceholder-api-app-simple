import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" && (
        <nav>
          <Link to="/albums">Albums</Link>
          <Link to="/album/1">Album</Link>
          <Link to="/create-album/">Create Álbum</Link>
          <Link to="/put-album/">Put Álbum</Link>
        </nav>
      )}

      {location.pathname !== "/" && (
        <div>
          <Link to="/">Volver atrás</Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
