import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAlbum } from "../../services/AlbumsService";
import "./Album.css";

const Album = () => {
  let { id } = useParams();
  const history = useHistory();
  const [album, setAlbum] = useState();
  const [loading, setLoading] = useState(false);
  const [currentId, setCurrentId] = useState(id);
  useEffect(() => {
    setLoading(true);
    getAlbum(currentId).then((data) => {
      setAlbum(data);
      setLoading(false);
    });
  }, [currentId]);

  return (
    <div className="wrapper-album">
      <h1>Album</h1>
      {loading && <div>Cargando...</div>}
      {!album && !loading && <div>No hay elementos que mostrar</div>}
      {album && !loading && (
        <div>
          {templateAlbum(album)}
          <div className="buttons-actions">
            <button
              onClick={() => {
                setCurrentId(Number(currentId) - 1);
                history.push(`/album/single/${Number(currentId) - 1}`);
              }}
              disabled={currentId <= 1}
            >
              -
            </button>
            <button
              onClick={() => {
                setCurrentId(Number(currentId) + 1);
                history.push(`/album/single/${Number(currentId) + 1}`);
              }}
            >
              +
            </button>
          </div>
        </div>
      )}
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
