import { useEffect, useState } from "react";
import { getAllAlbums } from "../../services/AlbumsService";
import "./Albums.css";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllAlbums().then((data) => {
      setAlbums(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Álbums</h1>
      {loading && <div>Cargando...</div>}
      {!loading && templateAlbums(albums)}
    </div>
  );
};

const templateAlbums = (albums) => {
  return albums.map((albums, index) => {
    return (
      <div key={index} className="albums-list">
        <div>
          <strong>userId:</strong> {albums.userId}{" "}
        </div>
        <div>
          <strong>Id:</strong> {albums.id}{" "}
        </div>
        <div>
          <strong>Título:</strong> {albums.title}{" "}
        </div>
      </div>
    );
  });
};

export default Albums;
