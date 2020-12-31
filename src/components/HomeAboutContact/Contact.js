import React from "react";
import "./styles.scss";

function Contact({ motion }) {
  return (
    <>
      {motion && (
        <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}} 
        >
          <h1>Contact frame</h1>
          <p>
            Dolor commodo commodo esse consequat. Incididunt voluptate in
            officia ex ea est sint deserunt ex aute eu sunt reprehenderit et.
            Nostrud id magna elit cupidatat ipsum anim dolor.
          </p>
        </motion.div>
      )}

      {!motion && (
        <div>
          <h1> Contact transition </h1>
          <p>
            Dolor commodo commodo esse consequat. Incididunt voluptate in
            officia ex ea est sint deserunt ex aute eu sunt reprehenderit et.
            Nostrud id magna elit cupidatat ipsum anim dolor.
          </p>
        </div>
      )}
    </>
  );
}

export default Contact;
