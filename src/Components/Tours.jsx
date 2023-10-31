import React from "react";
import Card from "./Card";
const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      <div>
        <h1>ViewFinder</h1>
      </div>
      <div>
        {/* returning card for every tours */}
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
