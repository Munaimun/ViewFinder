import { useState } from "react";
import data from "./data";
import dhaka from "./img/dhaka.jpg";
import cox from "./img/cox.jpg";
import Tours from "./Components/Tours";
import "./App.css";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
