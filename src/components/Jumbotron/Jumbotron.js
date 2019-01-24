import React from 'react';
// import { Jumbotron, Container } from 'reactstrap';
import "./Jumbotron.css"


const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
    <h1 className="display-4">Engage!</h1>
    <p className="lead">Click each picture to earn points, but don't click an image more than once!</p>
    <p className="lead">Correct Guesses: {props.correctGuess}</p>
    <p className="lead">Top Score: {props.bestScore}</p>
  </div>
  );
};


export default Jumbotron;