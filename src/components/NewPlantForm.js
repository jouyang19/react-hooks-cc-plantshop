import React, { useState } from "react";

function NewPlantForm({ plants, setPlants }) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: 0,
  });

  console.log(newPlant);

  function handleChangeName(event) {
    console.log(event.target.value);
    setNewPlant({ ...newPlant, name: event.target.value });
  }

  function handleChangeImage(event) {
    console.log(event.target.value);
    setNewPlant({ ...newPlant, image: event.target.value });
  }

  function handleChangePrice(event) {
    console.log(event.target.value);
    setNewPlant({ ...newPlant, price: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPlants([...plants, newPlant]);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={newPlant.name}
          onChange={(event) => handleChangeName(event)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newPlant.image}
          onChange={handleChangeImage}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={newPlant.price}
          onChange={handleChangePrice}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
