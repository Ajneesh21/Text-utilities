import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnClick = () => {
    console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("UpperCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="form-group ">
        <label htmlFor="exampleFormControlTextarea1">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          onChange={handleOnChange}
          value={text}
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button onClick={handleOnClick} className="btn btn-primary mx-2">
        Convert to Uppercase
      </button>
      <button onClick={handleLoClick} className="btn btn-primary mx-2">
        Convert to Lowercase
      </button>
      <div className="form-group my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{Math.ceil(0.008 * text.split(" ").length)} minute(s) read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

// function handleSubmit(event) {
//     event. preventDefault();
//     }
// <form onSubmit={handleSubmit}></form>
