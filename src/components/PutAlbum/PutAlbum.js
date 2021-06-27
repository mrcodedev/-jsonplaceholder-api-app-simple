import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import { putAlbum } from "../../services/AlbumsService";
import "./PutAlbum.css";

const PutAlbum = () => {
  let { id } = useParams();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [putData, setPutData] = useState();

  const sendForm = (event) => {
    event.preventDefault();
    let formData = new FormData(formRef.current);
    setLoading(true);
    putAlbum(id, formData).then((response) => {
      setPutData(response);
      setLoading(false);
    });
  };

  return (
    <div>
      s
      {!loading && (
        <div className="create-album">
          <h1>Put Album</h1>
          <form id="formPost" ref={formRef} onSubmit={sendForm}>
            <input name="title" placeholder="Title" />
            <input name="body" placeholder="Body" />
            <input name="userid" placeholder="userId" />
            <button type="submit">Create Album</button>
          </form>
        </div>
      )}
      {id && (
        <div className="creation-id">
          <strong>Id creada: </strong>
          {putData}
        </div>
      )}
    </div>
  );
};

export default PutAlbum;
