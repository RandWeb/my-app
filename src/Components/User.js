import React, { Component } from 'react';
import './user.css'
// statefull component
class User extends Component {

    onClickForRemove = () => {
        this.props.onRemove(this.props.id)
    }
    render() {
        return (
            <div className="user">
                <i onClick={this.onClickForRemove} className='remove'>X</i>
                <div>
                    <label>Name: </label>
                    <span>{this.props.name}</span>
                </div>

                <div>
                    <label>Age: </label>
                    <span>{this.props.age}</span>
                </div>
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


