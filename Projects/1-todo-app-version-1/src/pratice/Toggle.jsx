import { useState } from "react";
import React from "react";

function Toggle() {
  const [isVisible, setisVisible] = useState(false);
  const ShowMe = () => {
    if (isVisible == true) {
      setisVisible(false);
    } else {
      setisVisible(true);
    }
  };
  return (
    <div>
      {isVisible ? <p>I am text</p> : <p>I am in visible</p>}
      <button onClick={ShowMe}>Click Me</button>;
    </div>
  );
}

export default Toggle;
