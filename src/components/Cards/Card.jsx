import React from 'react'
import './Card.css'

const Card = ({url, title}) => {
  return (
    <div className= "Card">
      <img src = {url} className= "movie-img"/>
      <h3> {title}</h3>
      </div>
  );
};

export default Card