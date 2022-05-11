import React, { useState, useEffect } from "react";
import { SwapiServer } from "../../client/SwapiServer";
import { Spinner } from "../Spinner";
import { ErrorMessage } from "../ErrorMessage";
import { PlanetItem } from "./planet-item";
import "./random-planet.css";

export const RandomPlanet = () => {
  const [planetState, setPlanetState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const errorMessage = () => {
    setLoading(false);
    setError(true);
  };

  useEffect(() => {
    const id = Math.floor(Math.random() * 20 + 10);
    const swapi = new SwapiServer();
    swapi
      .getPlanet(id)
      .then((res) => {
        setPlanetState({ ...res });
        setLoading(false);
      })
      .catch(errorMessage);
  }, []);

  const hasData = !(error || loading);
  const errorCheck = error && <ErrorMessage />;
  const loadingCheck = loading && <Spinner />;
  const content = hasData && <PlanetItem planetItem={planetState} />;

  return (
    <div className="planet_wrapper">
      {errorCheck}
      {loadingCheck}
      {content}
    </div>
  );
};
