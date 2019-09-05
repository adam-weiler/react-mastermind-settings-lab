import React from 'react';
import { Link } from 'react-router-dom';
import './SettingsPage.css';

const SettingsPage = (props) => {

  console.log(props.colorsLookup);
  console.log(props.difficulty);
  console.log(props.handleNewGameClick);

  
  
  const colorKeys = Object.keys(props.colorsLookup);
  console.log(colorKeys);

  let allButtons = colorKeys.map(item => (
    <div>
    
      <button
        className='btn btn-default'
        onClick={props.handleNewGameClick}
      >
        {item}
      </button>
       --- {item} colours
    </div>
  ))


  return (
    <div>
      <Link to='/'>HOME</Link>
      <h1>Set Difficulty Level</h1>
      {allButtons}
      <p>Cancel button</p>
      <Link className='btn btn-default GamePage-link-margin' to='/'>Cancel</Link>
    </div>
  );
};

export default SettingsPage;