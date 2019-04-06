import React, { Component } from 'react';
import Header from "./components/header/index"
import Clicky from "./components/Main/index"
import fractals from "./fractals.json";



class App extends Component {
  state = {
    message : "Click an image to begin",
    fractals,
    count: 0,
    score: 0,
    highScore: 0,
    clicked: []
  }
 shuffle = (array) => {
  for (var i = array.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
 }

onClick = (id) => {

  const shuffledArray = this.shuffle(fractals);
  this.setState({fractals: shuffledArray});

  
  // if fractal count < 0 then
if (this.state.clicked.includes(id)){
  this.setState({ score : 0, clicked: [], message: "Game Over"});
}
else {
  this.setState({
    clicked: this.state.clicked.concat([id]),
    score: this.state.score + 1,
    message: "Correct",
  })
}

if (this.state.score > this.state.highScore){
  this.setState({highScore: this.state.score})
}
  // fractal count + 1 
  // shuffle
  //score + 1
  // if score > highscore >>>> highscore  ==== score
  //message is guessed correctly

/**********ELSE******/
//if fractal count === 1
//shuffle
//set score state to 0
//message Wrong!
//

}

  render() {
    return (
      <div className="App text-center">
       <Header score = {this.state.score}
       highScore = {this.state.highScore} 
       message = {this.state.message}/>
      {this.state.fractals.map(fractal =>(
       
        <Clicky onClick={this.onClick}
        id = {fractal.id}
        key = {fractal.id}
        image = {fractal.image} />
       
      ))}
       

      </div>
    );
  }
}

export default App;
