// import "./App.scss";
// import "./animated.scss";
// import "helpers/util.scss";
// import Eg from "eg/EgRouter";
import React from "react"
import SectionOne from "pages/SectionOne";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,

} from "react-router-dom";



function HSL(){

  return (
    <div>
       HSL
    </div>
  )
}

function App() {
  // let { path } = useRouteMatch();

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
          <div>
            <Link to="/animated-transitions"> animated-transitions </Link>
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

            <Route path="/animated-transitions">
 
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
  let { path } = useRouteMatch();

  function Stats() {
    return (
      <>
        <p> Stats : detail2 detail2</p>
      </>
    );
  }
  function Skills() {
    return <p> Skills : Skills2 detail2(throw rock, find honey ) </p>;
  }
  function Items() {
    return <p> Items : Items detail2(chocolate cake) </p>;
  }

  function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();

    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }

  return (
    <>
      <Router>
        <h1> Users Option: </h1>
        <ul>
          <li>
            <Link to={`${path}/Stats`}> Stats </Link>
          </li>
          <li>
            <Link to={`${path}/Skills`}> Skills </Link>
          </li>
          <li>
            <Link to={`${path}/Items`}> Items </Link>
          </li>
        </ul>
        <br></br>
        <Switch>
          <Route path={`${path}`} exact>
            Select things
          </Route>
        </Switch>
        <Switch>
          <Route path={`${path}/Stats`}>
            <Stats />
          </Route>
        </Switch>
        <Switch>
          <Route path={`${path}/Skills`}>
            <Skills />
          </Route>
        </Switch>
        <Switch>
          <Route path={`${path}/Items`}>
            <Items />
          </Route>
        </Switch>

        <Switch>
          <Route path={`${path}/:id`} children={<Child />} />
        </Switch>
      </Router>
    </>
  );
}
