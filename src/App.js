import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Jumbotron from "./components/Jumbotron"

let correctGuess = 0
let bestScore = 0
let clickMessage = ""
// Click each picture to earn points, but don't click an image more than once!

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    correctGuess,
    bestScore,
    clickMessage
  };

  setClicked = id => {
    const friends = this.state.friends

    const clickedMatch = friends.filter(friend => friend.id === id)

    if (clickedMatch[0].clicked) {
      console.log("Correct Guesses:" + correctGuess)
      console.log("Best Score:" + bestScore)

      correctGuess = 0
      clickMessage = "Nope, you already clicked that one."

      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false
      }
      this.setState({clickMessage})
      this.setState({correctGuess})
      this.setState({friends})
    } else if (correctGuess < 11) {
      clickedMatch[0].clicked = true

      correctGuess++

      clickMessage = "Nice one."

      if (correctGuess > bestScore) {
        bestScore = correctGuess
        this.setState({bestScore})
      }
      friends.sort(function(a, b) {return 0.5 - Math.random()})

      this.setState({friends})
      this.setState({correctGuess})
      this.setState({clickMessage})
    } else {
      clickedMatch[0].clicked = true

      correctGuess = 0

      clickMessage = "Got 'em!"
      bestScore = 12
      this.setState({bestScore})

      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false
      }
      friends.sort(function(a, b) {return 0.5 - Math.random()})

      this.setState({friends})
      this.setState({correctGuess})
      this.setState({clickMessage})
    }
  }

  // Map over this.state.friends and render a Card component for each friend object
  render() {
    return (
    <body>
      <Jumbotron
      correctGuess={this.state.correctGuess}
      bestScore={this.state.bestScore}
    />
      <Wrapper>
        {/* <Title>Engage!</Title> */}

     

        {/* <h3 className="scoreSummary">
          {this.state.clickMessage}
        </h3>

      <h3 className="scoreSummary">
        Correct Guesses: {this.state.correctGuess}
        <br />
        Top Score: {this.state.bestScore}
      </h3> */}

        {this.state.friends.map(friend => (
          <Card
          setClicked={this.setClicked}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    </body>
    );
  }
}

export default App;
