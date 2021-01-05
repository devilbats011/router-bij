import React from "react";
import "./index.scss";
import pokeball from "icons/pokemaster.svg";
import pokeballOutline from "icons/pokemaster-outline.svg";

function Upload() {
  function dragOverHandler(ev) {
    console.log("-dragOver-File(s) in drop zone");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  function dropHandler(ev) {
    console.log("-drop-File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  return (
    <div>
      <h1>Upload transition</h1>
      <input type="file" name="file" id="file" className="inputfile" />
      <label
        htmlFor="file"
        className="drop-zone"
        onDrop={(e) => {
          dropHandler(e);
        }}
        onDragOver={(e) => {
          dragOverHandler(e);
        }}
      >
        <img src={pokeballOutline} alt="pokeball" height="120" />
        <p> Drop a file \^.^/</p>
      </label>
      <br /> <br />
      <p>Upload and Drag ! and display files2 too! dropbbox from select </p>
    </div>
  );
}

export default Upload;
