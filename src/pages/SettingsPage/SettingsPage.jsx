import React from 'react';
import { Link } from 'react-router-dom';
import './SettingsPage.css';

const SettingsPage = (props) => {
  const handleDifficultyChange = (level) => {
    console.log(`New difficulty: ${level}`);
    props.handleDifficultyChange(level);
    props.history.push('/');
  }

  // console.log(props.colorsLookup);
  // console.log(props.difficulty);
  
  const colorKeys = Object.keys(props.colorsLookup);
  // console.log(colorKeys);

  const allButtons = colorKeys.map(level => (
    <div key={level}>
      <button
        className='btn btn-default'
        onClick={() => handleDifficultyChange(level)}
        disabled={level === props.difficult}
      >
        {level}
      </button>

      { props.colorsLookup[level].map(colour => 
          <div 
          style={{backgroundColor: colour}} 
          className='dot'
          key={colour}>
          </div> 
       )}
    </div>
  ));

  return (
    <div>
      <Link to='/'>HOME</Link>
      <h1>Set Difficulty Level</h1>
      {allButtons}
      <Link className='btn btn-default GamePage-link-margin' to='/'>Cancel</Link>
    </div>
  );
};

export default SettingsPage;