import React, { useState, useEffect } from "react";
import { SwapiServer } from "../../client/SwapiServer";
import { Spinner } from "../Spinner";
import "./person-details.css";

export const PersonDetails = (props) => {
  const [personState, setPlanetState] = useState();
  const [loading, setLoading] = useState(true);

  console.log(props.selectedPerson);
  
  const updatePlanet = () => {
    const id = props.selectedPerson;
    const swapi = new SwapiServer();
    setLoading(true);
    swapi.getPerson(id).then((res) => {
      setPlanetState(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    updatePlanet();
  }, [props.selectedPerson]);

  return (
    <div className="person_wrapper">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <img
            className="planet_img"
            src={
              personState.id &&
              `https://starwars-visualguide.com/assets/img/person/${personState.id}.jpg`
            }
            alt=""
          />
          <div className="info_container">
            <div className="planet_name">{personState.name}</div>
            <div>
              <div className="planet_item">
                <span className="item_name">Population</span>
                <span>{personState.population}</span>
              </div>
              <div className="planet_item">
                <span className="item_name">RotationPeriod</span>
                <span>{personState.rotation}</span>
              </div>
              <div className="planet_item">
                <span className="item_name">Diameter</span>
                <span>{personState.diameter}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
