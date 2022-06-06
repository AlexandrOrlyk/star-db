import React, { useState } from "react";
import { Header } from "../header/index";
import { RandomPlanet } from "../random-planet/index";
import { PersonDetails } from "../person-details/index";
import { ItemList } from "../item-list/index";
import "./app.css";

export const App = () => {
  const [selectedPerson, setSelectedPerson] = useState();

  const personChooseHandler = (id) => {
    console.log(id, id);
    setSelectedPerson(id);
  };

  console.log("selectedPerson", selectedPerson);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <RandomPlanet />
      <div className="person_container"> 
        <ItemList personChooseHandler={personChooseHandler} selectedPerson={selectedPerson} />
        <PersonDetails selectedPerson={selectedPerson} />
      </div>
    </div>
  );
};
