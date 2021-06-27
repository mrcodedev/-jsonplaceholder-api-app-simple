import "./App.css";
import Nav from "./components/Nav/Nav";
import Album from "./components/Album/Album";
import Albums from "./components/Albums/Albums";
import CreateAlbum from "./components/CreateAlbum/CreateAlbum";
import PutAlbum from "./components/PutAlbum/PutAlbum";
import PatchAlbum from "./components/PatchAlbum/PatchAlbum";
import DeleteAlbum from "./components/DeleteAlbum/DeleteAlbum";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>JSONPlaceholder</h1>
        </header>
        <Nav />
        <Switch>
          <Route path="/album/single/:id">
            <Album />
          </Route>
          <Route path="/albums/">
            <Albums />
          </Route>
          <Route path="/album/create">
            <CreateAlbum />
          </Route>
          <Route path="/album/put">
            <PutAlbum />
          </Route>
          <Route path="/album/patch">
            <PatchAlbum />
          </Route>
          <Route path="/album/delete">
            <DeleteAlbum />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
