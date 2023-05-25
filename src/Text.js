import React, { useState } from "react";
import './text.css';

export default function Text(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const handleOnchange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1 style={{textAlign:"center"}}>{props.heading} </h1>
        <div className="textAlign">
          <textarea className="textBox" value={text} onChange={handleOnchange} id="myBox" rows="15"></textarea>
        </div> 
          <div>             
            <button className="button" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="button" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="button" onClick={handleClearClick}>Clear Text</button>
            <button className="button" onClick={handleCopy}>Copy Text</button>
         </div>        
      
        <div className="textSummary">
          <h2>Your Text Summary</h2>
          <p className="textSummary">
            {text.split(" ").length === 1? text.split(" ").length - 1: text.split(" ").length}{" "}
            Words and {text.length} Characters
          </p>
          <h2 className="textSummary"> Preview </h2>
          <p className="textSummary">{text}</p>
        </div>
      </div>
    </>
  );
}
