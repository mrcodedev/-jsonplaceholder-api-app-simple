import { useState, useRef } from "react";
import { deleteAlbum } from "../../services/AlbumsService";
import "./DeleteAlbum.css";

const DeleteAlbum = () => {
  const formRef = useRef(null);
  const [deleteData, setDeleteData] = useState(false);
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);

  const sendForm = (event) => {
    event.preventDefault();
    let formData = new FormData(formRef.current);
    setId(formData.get("id"));
    setLoading(true);
    setDeleteData(false);
    deleteAlbum(id).then((response) => {
      setDeleteData(response);
      setLoading(false);
    });
  };

  return (
    <div className="wrapper-create">
      <h1>Delete Album</h1>
      {loading && <div className="loading">Cargando...</div>}
      {!loading && (
        <div className="create-album">
          <form id="formPost" ref={formRef} onSubmit={sendForm}>
            <input name="id" placeholder="Id" required />
            <button type="submit">Delete Album</button>
          </form>
        </div>
      )}
      {!loading && deleteData && (
        <div className="delete-result">
          <strong>DELETED</strong>
        </div>
      )}
    </div>
  );
};

export default DeleteAlbum;
