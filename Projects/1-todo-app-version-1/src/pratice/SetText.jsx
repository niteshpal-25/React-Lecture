import React, { useState } from "react";

function SetText() {
  const [text, setText] = useState("");
  function handleInputChange(event) {
    setText(event.target.value);
  }
  return (
    <div>
      <p>Input text: {text}</p>
      <input type="text" value={text} onChange={handleInputChange}></input>
    </div>
  );
}

export default SetText;
