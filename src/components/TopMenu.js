import React from 'react';
import './compStyle.css';
import {Link} from 'react-router-dom';

function TopMenu({cityName}) {
  return (
    <div className="topMenu">

      Weather in {cityName}
      <div style={{ position: "absolute",right:"375px",top:"2px"}}>Enter City ID:</div>
      
      <input type="text" className="right"></input>
    </div>
  );
}

export default TopMenu;