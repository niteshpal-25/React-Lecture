import "./App.css";

function App() {
  let CurrentTime = new Date();
  let currentDateTime =
    CurrentTime.toLocaleString() + "" + CurrentTime.toLocaleString;

  return (
    <div className="card">
      <h3>
        <b>Bharat Clock</b>
      </h3>
      <p className="description">
        This is a clock that shows the time in Bharat at all times
      </p>
      <p className="clock">Current Time: {currentDateTime}</p>
    </div>
  );
}

export default App;
