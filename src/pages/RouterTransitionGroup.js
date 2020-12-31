/* animate.css documentation : https://animate.style/  */
import "animate.css";
import React from "react";
import "./router-styles.scss";

import {
  Route,
  Link,
  useLocation,
  
} from "react-router-dom";

import { CSSTransition } from "react-transition-group";

/* default render component home because path: "/" */
function RouterTransitionGroup({routes}) {
  let location = useLocation();
  return (
      <div>
        <div className="animated-nav">
          {routes.map((route) => {
            return (
              <Link
                key={route.path}
                to={route.path}
                className="animated-navitem"
              >
                {route.name}
              </Link>
            );
          })}
        </div>

        <main className="animated-main">
        {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    {  console.log("match", match)  }
                    {  console.log("location", location)  }
                    <Component match={match} />
                  </div>
                </CSSTransition>
              )}
            </Route>
        ))}
          </main>
      </div>
  );
}

export default RouterTransitionGroup;
