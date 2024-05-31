import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plants) => setPlants(plants));
  }, []);

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
