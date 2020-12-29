import "./App.scss";
import "helpers/util.scss";
import Eg from "eg/EgRouter";

import SectionOne from "components/pages/SectionOne";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Eg/> */}
      <Router>
        <main>
          <div>
            <Link to="/main"> to="/main" </Link>
          </div>
          <div>
            <Link to="/"> to="/" </Link>
          </div>
          <div>
            <Link to="/about"> to="/about" </Link>
          </div>
          <div>
            {/* <Link to="/users">users</Link> */}
            {/* guna href pon boleh juga */}
            <a href="/users"> users</a>
          </div>

          <br></br>
          <Switch>
            <Route path="/main">
              <SectionOne />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/users">
              <Users />
            </Route>

            {/* BENDA Route path="/" ni kena duduk bawah sekali ,if not everything BREAK--....wtheck...
        ATAU  path="/" takyah pakai lansgung and everything will be fine.. 
*/}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;

function Home() {
  return (
    <article class="b-123 flex-justify-center py-1rem">Hi i'm path="/"</article>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
