import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class Student extends Component {
    // static defaultProps = {
    //     age:0,
    //     name:""
    // }

    // static propTypes = {
    //     age: PropTypes.number
    // }
    getColor = () => {
        return (this.props.age > 18 ? "green" : 'red');
    };
    render() {
        return (
            <div style={{ background: this.getColor() }} >
                {this.props.name} [{this.props.age}]
            </div>
        )
    }
}

// Student.defaultProps = {
//     age: 0,
//     name: ""
// }
Student.propTypes = {
    age: PropTypes.number.isRequired
}