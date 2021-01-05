/* animate.css documentation : https://animate.style/  */
import "animate.css";
import "./router-styles.scss";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import React from "react";
import { AnimatePresence,motion } from "framer-motion";

function RouterFrameMotion({ routes }) {

  const pageTransition = {
    enter: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }

  let loc = useLocation();
  return (
    <div>
      <div className="animated-nav">
        {routes.map((route) => {
          return (
            <Link key={route.path} to={route.path} className="animated-navitem">
              {route.name}
            </Link>
          );
        })}
      </div>
      <main className="animated-main">
        <article className="page ">
          <AnimatePresence exitBeforeEnter>
            <Switch>
              {routes.map(({ path, name, Component }) => (
                <Route key={loc.key} exact path={path} >
                    <Component motion={motion}  pageTransition={pageTransition} />
                </Route>
              ))}
            </Switch>
          </AnimatePresence>
        </article>
      </main>
    </div>
  );
}

export default RouterFrameMotion;
