import React, { useState, useEffect } from "react";
import { SwapiServer } from "../../client/SwapiServer";
import "../random-planet/random-planet.css";
import { Spinner } from "../Spinner";
import "./item-list.css";

export const ItemList = (props) => {
  const [peopleState, setPeopleState] = useState();

  const updatePerson = () => {
    const swapi = new SwapiServer();
    swapi.getAllPeople().then((res) => {
      setPeopleState(res);
    });
  };

  useEffect(() => {
    updatePerson();
  }, []);

  return !peopleState ? (
    <Spinner />
  ) : (
    <div className="persons_wrapper">
      {peopleState &&
        peopleState.map((person, key) => (
          <div
            onClick={() => props.personChooseHandler(person.id)}
            key={person.id}
            className={`persons_item ${person.id === props.selectedPerson && "active"}`}
          >
            <span>{person.name}</span>
          </div>
        ))}
    </div>
  );
};
