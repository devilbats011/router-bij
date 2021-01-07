/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./styles.scss";
import gsap from "gsap";
export default function Home({ motion = false, pageTransition, ...props }) {
  const [state, setstate] = useState(true);
  useEffect(() => {
    /*
    gsap.to(".box",{duration:2, x: 10})
    gsap.to("#circle", {morphSVG:"#hippo", duration: 1});
    */
    // let tl = gsap.timeline({repeat: -1, delay:0.5,repeatDelay:0.5, id:"blob"})
    gsap.to("#blob", 2, {scale: 1,
      attr: {
        d:`M49.4,-68.7C63.5,-57.6,74.3,-42.6,80,-25.6C86.9,-8.6,88.7,10.4,83.3,27.1C77.9,43.8,65.3,58.2,50.2,69C35.2,79.8,17.6,87.1,-0.1,87.3C-17.8,87.5,-35.7,80.6,-50.4,69.6C-65.2,58.7,-76.8,43.7,-83.1,26.5C-89.3,9.3,-90.2,-10.1,-84.7,-27.7C-79.2,-45.2,-67.3,-60.7,-52.1,-71.5C-37,-82.3,-18.5,-88.2,-0.4,-87.6C17.6,-87,35.2,-79.8,49.4,-68.7Z`

      },
    })

    // gsap.to("#blob", 2, {
    //   attr: {
    //     d: "M55.8,-67.8C70.4,-54.4,78.8,-34.9,82.6,-14.4C86.4,6.1,85.6,27.5,76.5,44.9C67.4,62.3,49.9,75.6,30.4,82C11,88.3,-10.4,87.7,-28.8,80.4C-47.2,73.1,-62.6,59.1,-71.9,42C-81.2,24.9,-84.4,4.7,-81.6,-15C-78.9,-34.7,-70.2,-54,-55.6,-67.4C-41,-80.8,-20.5,-88.2,0.1,-88.3C20.7,-88.4,41.3,-81.1,55.8,-67.8Z"
    //   },
    // })

  });

  if (motion !== false) {
    return (
      <motion.div
        initial="exit"
        animate="enter"
        exit="exit"
        variants={pageTransition}
      >
        <h1> Home frame</h1>
        <p>
          Mollit eu fugiat do laboris ex anim consequat reprehenderit eu culpa
          enim qui. Aliquip nulla aliquip nulla est culpa magna laborum sunt
          velit eu excepteur aliqua culpa do. Sint cillum proident aliqua
          nostrud fugiat occaecat magna veniam laborum ad nostrud. Officia
          aliqua sunt commodo esse reprehenderit elit deserunt labore cupidatat
          quis sint id. Sit nisi consequat ut Lorem id pariatur incididunt anim
          occaecat cupidatat commodo est sit.
        </p>
      </motion.div>
    );
  } else {
    return (
      <div>
        <h1>Home transition</h1>
        <div className="home-div box">
          <h1> BLOB ATTEMPT-1 </h1>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" id="blob" d="M52.5,-72.9C66.9,-61.8,76.6,-44.9,81.8,-27C87,-9.1,87.8,9.8,83,27.7C78.2,45.5,67.8,62.3,53.1,74.2C38.3,86,19.2,92.9,0.1,92.7C-18.9,92.6,-37.9,85.4,-52.4,73.5C-66.9,61.6,-77.1,45,-83.4,26.8C-89.8,8.6,-92.4,-11.1,-86.8,-28.2C-81.2,-45.2,-67.5,-59.6,-51.6,-70.2C-35.8,-80.8,-17.9,-87.6,0.6,-88.4C19.1,-89.2,38.1,-84,52.5,-72.9Z" transform="translate(100 100)" />

            <path
              fill="#FF0066"
              id="blob-a"
              d="M40.3,-50.1C47,-42.4,43.7,-24.8,41.8,-11C39.9,2.8,39.6,12.7,37.3,26.1C35,39.4,30.8,56.2,22.4,57.4C14.1,58.7,1.6,44.3,-14.9,39.1C-31.4,34,-52,37.9,-55.3,32C-58.7,26.1,-44.9,10.3,-42,-7.6C-39.1,-25.5,-47.1,-45.6,-41.9,-53.5C-36.7,-61.4,-18.3,-57.1,-0.8,-56.2C16.8,-55.3,33.6,-57.7,40.3,-50.1Z"
              transform="translate(100 100)"
            />

            <path
              fill="#FF0066"
              id="blob-b"
              d="M38.1,-45.8C49.3,-35.9,58.5,-23.9,64,-8.8C69.6,6.2,71.6,24.4,65,39C58.3,53.7,43,64.9,26,70.9C9,76.9,-9.8,77.7,-23.3,70.1C-36.7,62.5,-44.9,46.6,-53.7,31.1C-62.6,15.6,-72.1,0.6,-69.6,-12C-67,-24.6,-52.4,-34.9,-38.8,-44.3C-25.2,-53.8,-12.6,-62.5,0.4,-63C13.4,-63.4,26.8,-55.7,38.1,-45.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    );
  }
}
