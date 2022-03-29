import User from './Components/User'
import React, { Component } from 'react';


// state full component or class component
class App extends Component {
  state = {
    users: [
      { id: 1, name: "mehrdad", age: "27" },
      { id: 2, name: "sajjad", age: "27" },
      { id: 3, name: "mohammad mahdi", age: "12" }
    ]
  }
  onButtonClick = () => {
    this.setState({
      users: [
        { id: 1, name: "ali", age: "26" },
        { id: 2, name: "sajjad", age: "27" },
        { id: 3, name: "mohammad mahdi", age: "1100" }
      ]
    }); 
  }
  onUserDataChanged = (userId, data) => {
    console.log(userId, data)
  }
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>click me</button>
        <User name={this.state.users[0].name} age={this.state.users[0].age} onChanged={this.onUserDataChanged} />
        <User name={this.state.users[1].name} age={this.state.users[1].age} onChanged={this.onUserDataChanged} />
        <User name={this.state.users[2].name} age={this.state.users[2].age} onChanged={this.onUserDataChanged} />
      </div>
    )
  }
}

export default App;
