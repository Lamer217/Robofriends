import React, { Component } from 'react';
import CardList from './CardList';
// Have to destructure for files that don't have "export default", like robots.js there
// import { robots } from './robots';
import Searchbox from './Searchbox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
  constructor() {
    super();
    /*     State is something that can change and
    effect uor app. It usualy lives in a parent component*/
    this.state = {
      robots: [],
      searchfield: '',
    };
    /* Components with STATE are called smart components */
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  }

  /* Below custom function that will get logged when
data in searchfield is changed */
  onSearchChange = event => {
    /* Use this syntax every time you vant to change state */
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          {/* Below I parse roborts to the cardlist component */}
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
