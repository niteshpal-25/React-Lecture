import React, { useState } from "react";

function EventExample() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const handelChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <div>
      <form>
        <p>
          Count {name} you have Clicked :{count} times
        </p>
        <br></br>
        <input
          type="text"
          placeholder="Enter any value to display in alert"
          value={name}
          onChange={handelChange}
        ></input>
        <button onClick={handleClick}>Click Me</button>
      </form>
    </div>
  );
}

export default EventExample;
