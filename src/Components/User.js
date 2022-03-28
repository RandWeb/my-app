import React from 'react';

//functinal compnent
let User = function(props){
    return(
        <div>
            hi {props.name} your age is {props.age}
            <br/>
            {props.children}
        </div>
    )
}

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


