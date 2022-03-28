import User from './Components/User'
import React, {Component} from 'react';

class App extends Component{
  render(){
    return (
      <div>
        <h1>mehrdad</h1>
        <User name="mehrdad" age="26" />
        <User name="mehrdad" age="26" >
          this is a children props
          </User>
      </div>
    )
  }
}

export default App;
