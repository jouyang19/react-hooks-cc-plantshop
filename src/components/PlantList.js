import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  console.log(plants);

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard name={plant.name} price={plant.price} image={plant.image} />
      ))}
    </ul>
  );
}

export default PlantList;
