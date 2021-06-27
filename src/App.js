import "./App.css";
import Nav from "./components/Nav/Nav";
import Album from "./components/Album/Album";
import Albums from "./components/Albums/Albums";
import CreateAlbum from "./components/CreateAlbum/CreateAlbum";
import PutAlbum from "./components/PutAlbum/PutAlbum";

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
          <Route path="/album/:id">
            <Album />
          </Route>
          <Route path="/albums/">
            <Albums />
          </Route>
          <Route path="/create-album/">
            <CreateAlbum />
          </Route>
          <Route path="/put-album/:id">
            <PutAlbum />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
