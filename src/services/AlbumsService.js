export const getAllAlbums = () => {
  return fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => {
      if (!response.ok) {
        return new Error(
          `ERROR: ${response.status} en la llamada getAllAlbums`
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getAlbum = (id) => {
  const parseId = Number(parseInt(id, 10));

  if (isNaN(parseId) && parseId === 0) {
    return new Error("ERROR: no has introducido una id válida");
  }

  return fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`ERROR: ${response.status} en la llamada getAlbum`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
};

export const postAlbum = (data) => {
  if (!data) {
    return;
  }

  return fetch(`https://jsonplaceholder.typicode.com/albums`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`ERROR: ${response.status} postAlbum`);
      }
      return response.json();
    })
    .then((json) => json)
    .catch((error) => {
      console.error(error);
    });
};

export const putAlbum = (data) => {
  if (!data) {
    return;
  }

  return fetch(`https://jsonplaceholder.typicode.com/albums/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`ERROR: ${response.status} putAlbum`);
      }
      return response.json();
    })
    .then((json) => json)
    .catch((error) => {
      console.error(error);
    });
};

export const patchAlbum = (data) => {
  if (!data) {
    return;
  }

  return fetch(`https://jsonplaceholder.typicode.com/albums/${data.id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`ERROR: ${response.status} patchAlbum`);
      }
      return response.json();
    })
    .then((json) => json)
    .catch((error) => {
      console.error(error);
    });
};

export const deleteAlbum = (id) => {
  const parseId = Number(parseInt(id, 10));

  if (isNaN(parseId) && parseId === 0) {
    return new Error("ERROR: no has introducido una id válida");
  }

  return fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`ERROR: ${response.status} en la llamada deleteAlbum`);
      }
      return true;
    })
    .catch((error) => {
      console.error(error);
    });
};
