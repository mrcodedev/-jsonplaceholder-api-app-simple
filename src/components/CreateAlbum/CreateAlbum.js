import "./CreateAlbum.css";
import { useRef, useState } from "react";
import { postAlbum } from "../../services/AlbumsService";

const CreateAlbum = () => {
  const formRef = useRef(null);
  const [postData, setPostData] = useState();
  const [loading, setLoading] = useState(false);

  const sendForm = (event) => {
    event.preventDefault();
    let formData = new FormData(formRef.current);
    const dataPost = {
      userId: formData.get("userId"),
      title: formData.get("title"),
    };
    setLoading(true);
    postAlbum(dataPost).then((response) => {
      setPostData(response);
      setLoading(false);
    });
  };

  return (
    <div>
      {!loading && (
        <div className="create-album">
          <h1>Create Album</h1>
          <form id="formPost" ref={formRef} onSubmit={sendForm}>
            <input name="userId" placeholder="UserId" />
            <input name="title" placeholder="Title" />
            <button type="submit">Create Album</button>
          </form>
        </div>
      )}
      {postData && (
        <div className="creation-id">
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
