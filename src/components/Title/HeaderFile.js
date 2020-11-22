import React from 'react';

import './style.css';

const StarButton = () => (
    <div>
    {/* <span>"logo"</span> */}
    {/* <img src="ok-life-care.png" alt="Logo"/> */}
    <img src={require(`./ok-life-care.png`)} alt="Logo"/>
    <br/>
  <span className="star-button-container">
       <strong>Welcome to "OK Life Care" Store By Ramesh Sharma</strong>
  </span>
  </div>
);

export default StarButton;