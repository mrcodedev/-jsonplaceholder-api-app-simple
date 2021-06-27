import { useState, useRef } from "react";
import { patchAlbum } from "../../services/AlbumsService";
import "./PatchAlbum.css";

const PatchAlbum = () => {
  const formRef = useRef(null);
  const [patchData, setPatchData] = useState();
  const [loading, setLoading] = useState(false);

  const sendForm = (event) => {
    event.preventDefault();
    let formData = new FormData(formRef.current);
    console.log(formData.get("title"));
    const putData = {
      id: formData.get("id"),
      ...(formData.get("userId") && { userId: formData.get("userId") }),
      ...(formData.get("title") && { title: formData.get("title") }),
    };
    setLoading(true);
    patchAlbum(putData).then((response) => {
      setPatchData(response);
      setLoading(false);
    });
  };

  return (
    <div className="wrapper-create">
      <h1>Patch Album</h1>
      {loading && <div className="loading">Cargando...</div>}
      {!loading && (
        <div className="create-album">
          <form id="formPost" ref={formRef} onSubmit={sendForm}>
            <input name="id" placeholder="Id" required />
            <input name="userId" placeholder="userId" />
            <input name="title" placeholder="Title" />
            <button type="submit">Patch Album</button>
          </form>
        </div>
      )}
      {!loading && patchData && (
        <div>
          <h2>PUT</h2>
          <div className="put-result">
            <div>
              <strong>Id creada: </strong>
              {patchData.id}
            </div>
            <div>
              <strong>UserId: </strong>
              {patchData.userId}
            </div>
            <div>
              <strong>Título: </strong>
              {patchData.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatchAlbum;
