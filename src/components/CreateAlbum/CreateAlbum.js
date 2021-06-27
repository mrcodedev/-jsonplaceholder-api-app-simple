import { useRef, useState } from "react";
import { postAlbum } from "../../services/AlbumsService";
import "./CreateAlbum.css";

const CreateAlbum = () => {
  const formRef = useRef(null);
  const [postData, setPostData] = useState();
  const [loading, setLoading] = useState(false);

  const sendForm = (event) => {
    event.preventDefault();
    let formData = new FormData(formRef.current);
    const postData = {
      userId: formData.get("userId"),
      title: formData.get("title"),
    };
    setLoading(true);
    postAlbum(postData).then((response) => {
      setPostData(response);
      setLoading(false);
    });
  };

  return (
    <div className="wrapper-create">
      <h1>Create Album</h1>
      {loading && <div className="loading">Cargando...</div>}
      {!loading && (
        <div className="create-album">
          <form id="formPost" ref={formRef} onSubmit={sendForm}>
            <input name="userId" placeholder="UserId" />
            <input name="title" placeholder="Title" />
            <button type="submit">Create Album</button>
          </form>
        </div>
      )}
      {!loading && postData && (
        <div className="post-result">
          <div>
            <strong>Id creada: </strong>
            {postData.id}
          </div>
          <div>
            <strong>UserId: </strong>
            {postData.userId}
          </div>
          <div>
            <strong>Título: </strong>
            {postData.title}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateAlbum;
