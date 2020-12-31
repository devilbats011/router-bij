import "./App.scss";
import "helpers/util.scss";
import RouterTransitionGroup from "pages/RouterTransitionGroup";
import RouterFrameMotion from "pages/RouterFrameMotion";
import React, { useState,useRef } from "react";
import {BrowserRouter as Router} from "react-router-dom"
import Home from "components/HomeAboutContact/Home";
import About from "components/HomeAboutContact/About";
import Contact from "components/HomeAboutContact/Contact";

function App() {
  const ChoiceOne = "react-transition-group";
  const ChoiceTwo = "frame-motion";
  const [choice, setChoice] = useState(ChoiceOne);
  const one = useRef(null)
  const two = useRef(null)
  
  function handleChoice(target) {
    if(target.value === ChoiceOne) two.current.checked = false;
    if(target.value === ChoiceTwo) one.current.checked = false;
    setChoice(target.value);
  }

  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    { path: "/contact", name: "Contact", Component: Contact },
  ];

  return (
    <div>
      <input type="checkbox" name="one" value={ChoiceOne} onClick={(e)=>{handleChoice(e.target)}} ref={one} /> {ChoiceOne} <br />
      <input type="checkbox" name="two" value={ChoiceTwo} onClick={(e)=>{handleChoice(e.target)}} ref={two} /> {ChoiceTwo} <br />
    <Router>
      {choice === ChoiceOne ? (<RouterTransitionGroup routes={routes} />) : <RouterFrameMotion routes={routes} />}
    </Router>
    </div>
  );
}

export default App;
