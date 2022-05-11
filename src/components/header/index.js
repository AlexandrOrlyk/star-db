import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <ul className='header'>
      <h1 className='logo'>Star DB</h1>
      <li className='nav'>People</li>
      <li className='nav'>Planets</li>
      <li className='nav'>Starships</li>
    </ul>
  );
};
