import React, { Component } from "react";

import Student from "./Components/Student";
class AppStudent extends Component {
    render() {
        return (
            <div>
                <Student name={"ali"} age={20} />

                <Student name={"reza"} age={12} />
                <Student name={"mehrdad"} />
            </div>
        )
    }
}

export default AppStudent
