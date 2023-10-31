import { useState } from "react";
import data from "./data";
import Tours from "./Components/Tours";
import "./App.css";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Toure Packages Left</h2>
        <button className="btn-refresh" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
