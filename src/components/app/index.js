import React from "react";
import { Header } from "../header/index";
import { RandomPlanet } from "../random-planet/index";
import {PersonDetails} from '../person-details/index'
import './app.css'

export const App = () => {


  return (
    <div className="App">
      <header className="App-header">
        <Header />  
        <RandomPlanet />  
        <PersonDetails />   
      </header>
    </div>
  );
};
