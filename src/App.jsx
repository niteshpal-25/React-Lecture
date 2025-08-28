import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./Welcome";
import ErrorMessage from "./ErrorMessage";
function App() {
  let isLoggedIn = true;
  return (
    <>{isLoggedIn ? <Welcome></Welcome> : <ErrorMessage></ErrorMessage>}</>
  );
}

//3.24.06

export default App;
