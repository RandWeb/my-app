import User from './Components/User'
import React, { Component } from 'react';
import './css/master.css';

// state full component or class component
class App extends Component {
  state = {
    users: [
      { id: 1, name: "mehrdad", age: "27" },
      { id: 2, name: "sajjad", age: "7" },
      { id: 3, name: "mohammad mahdi", age: "12" }
    ],
    searchText: ""
  }
  showList = () => {
    let users = this.state.searchText == "" ? this.state.users :
      this.state.users.filter(user => {
        let reg = new RegExp(this.state.searchText)
        if (user.age.match(reg) || user.name.match(reg)) return user;
      })
    console.log(users);
    return (
      <div >
        {
          users.map(user => (
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
    if (newState.users.length == 0) id = 0;
    let newPerson = { id: ++id, name: nname, age: aage };
    console.log(newPerson);
    newState.users.push(newPerson);
    // or newState.users = [...this.newState.users,newPerson];
    this.setState(newState);
  }
  RemovePerson = (id) => {
    let newState = { ...this.state };
    console.log(newState.users.filter(i => i.id == id));
    newState.users = newState.users.filter(user => user.id != id);
    this.setState(newState);
  }

  filterUsers = (e) => {
    let newState = { ...this.state };
    newState.searchText = e.target.value;
   this.setState(newState)
  }
  render() {
    return (
      <div>
        <button onClick={this.AddPerson}> Add Person </ button>
        <br />
        <input className='search' type="text" placeholder="Enter any ..." onChange={this.filterUsers} />
        <br />
        {this.showList()}
      </div>
    )
  }
}

export default App;
