import React, { Component } from 'react';

// statefull component
class User extends Component {
    i = 0;
    state = {
        name: this.props.name,
        age: this.props.age
    }

    onButtonClicked = () => {
        let newObject = {
            name: "newName" + this.i,
            age: 35
        };
        this.i = this.i + 1;
        this.setState(newObject);
        this.props.onChanged(this.props.id);
    }
    render() {
        this.props.onChanged(this.props.id, this.newObject);
        return (
            <div>
                <button onClick={this.onButtonClicked}>click from child</button>
                hi {this.state.name} your age is {this.state.age}
                <br />
                {this.props.children}
            </div>
        );
    };
}
//functinal compnent or stateless component
// let User = function(props){
//     return(
//         <div>
//             hi {props.name} your age is {props.age}
//             <br/>
//             {props.children}
//         </div>
//     )
// }

/* return 
         string 
         property 
         value changeable to string 
         convert to json 
         */
/**
 * 
 * تعریف ماژول:
 * ماژول ها فایل هایی هستن که محتویات درون خودشون را بیرون می فرستند
 */

export default User;


