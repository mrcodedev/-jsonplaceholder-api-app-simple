import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAlbum } from "../../services/AlbumsService";
import "./Album.css";

const Album = () => {
  let { id } = useParams();
  const [album, setAlbum] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAlbum(id).then((data) => {
      setAlbum(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="wrapper-album">
      <h1>Album</h1>
      {loading && <div>Cargando...</div>}
      {!album && !loading && <div>No hay elementos que mostrar</div>}
      {album && !loading && templateAlbum(album)}
    </div>
  );
};

const templateAlbum = (album) => {
  return (
    <div className="album-item">
      <div>
        <strong>userId:</strong> {album.userId}{" "}
      </div>
      <div>
        <strong>Id:</strong> {album.id}{" "}
      </div>
      <div>
        <strong>Título:</strong> {album.title}{" "}
      </div>
    </div>
  );
};

export default Album;
