import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleOnClick = () => {
      console.log("UpperCase was clicked");
      let newText = text.toUpperCase()
      setText(newText);
}

  const handleOnChange= (event) => {
    console.log("UpperCase was c");
    setText(event.target.value);
  }

 
  return (
      <>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          onChange={handleOnChange}
          value={text}
          className="form-control"
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button onClick={handleOnClick} className="btn btn-primary">Convert to Uppercase</button>
</>  
  );
}


// function handleSubmit(event) {
//     event. preventDefault();
//     }
// <form onSubmit={handleSubmit}></form>
