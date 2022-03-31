import User from './Components/User'
import React, { Component } from 'react';


// state full component or class component
class App extends Component {
  state = {
    users: [
      { id: 1, name: "mehrdad", age: "27" },
      { id: 2, name: "sajjad", age: "7" },
      { id: 3, name: "mohammad mahdi", age: "12" }
    ],
  }
  showList = () => {
    return (
      <div >
        {
          this.state.users.map(user => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              age={user.age}
              onRemove={this.RemovePerson}
            />
          ))
        }
      </div>
    )
  }

  AddPerson = () => {
    let nname = prompt("enter your name : ");
    let aage = prompt("enter your age : ");
    let newState = { ...this.state }
    let ids = newState.users.map(id => id.id);
    let id = Math.max(...ids);
    if(newState.users.length == 0) id = 0;
    let newPerson = { id: ++id, name: nname, age: aage };
    console.log(newPerson);
    newState.users.push(newPerson);
    this.setState(newState);
  }
  RemovePerson = (id) => {
    let newState = { ...this.state };
    console.log(newState.users.filter(i => i.id == id));
    newState.users = newState.users.filter(user => user.id != id);
    this.setState(newState);
  }
  render() {
    return (
      <div>
        <button onClick={this.AddPerson}> Add Person </ button>
        <br />
        <br />
        {this.showList()}
      </div>
    )
  }
}

export default App;
