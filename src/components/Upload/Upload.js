import React, { useState } from "react";
import "./index.scss";
import pokeball from "icons/pokemaster.svg";
import pokeballOutline from "icons/pokemaster-outline.svg";

function Upload() {
  const [p, setP] = useState(" Drop a file \\^.^/ ");
  const [mesej, setMesej] = useState("- -");

  function dragOverHandler(ev) {
    console.log("-dragOver-File(s) in drop zone");
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  function filesHandler(e) {
    console.log("filesHandler: ", e.target.files[0]);
    
    const file =  e.target.files[0];
    if(file !== undefined) setMesej(file.name + " | thru click method");
  }

  function UploadHandler(e) {}

  function dropHandler(ev) {
    console.log("-drop-File(s) dropped");
    console.log(ev.dataTransfer);
    // Prevent default behavior (Prevent file from being opened)
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them

        if (ev.dataTransfer.items[i].kind === "file") {
          var file = ev.dataTransfer.items[i].getAsFile();
          // console.log('file:', file)

          console.log("if... file[" + i + "].name = " + file.name);
          if(file !== undefined) setMesej(file.name + " | thru drag&drop method");
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log(
          "else... file[" + i + "].name = " + ev.dataTransfer.files[i].name
        );
      }
    }

    setP(" Drop a file \\^.^/ again !");

    ev.preventDefault();
  }

  return (
    <div>
      <h1>Upload files and Drag&Drop transition</h1>
      
      <input
        type="file"
        name="file"
        id="file"
        className="inputfile"
        onChange={(e) => filesHandler(e)}
      />
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
        <p>{p}</p><hr></hr>
        <p style={{letterSpacing:"normal",fontSize:"14px",textAlign:"justify"}}> File Name: {mesej} </p>
      </label>
      <button
      hidden
        onClick={(e) => {
          UploadHandler(e);
        }}
      >
        UpLoad to Db
      </button>
      <br /> <br />
      <p>Currently, the file do not upload to any db</p>

    </div>
  );
}

export default Upload;
