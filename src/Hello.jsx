import React from "react";

function Hello() {
  let number = 450;
  let fullName = () => {
    return "Nitesh Pal";
  };
  return (
    <div>
      <p>
        MessageNo: {number} I am your master {fullName()}
      </p>
    </div>
  );
}

export default Hello;
