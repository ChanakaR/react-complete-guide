/**
 *  this is a functional component
 *  <Person name="Bob" age="24">This is the chidlren components</Person>
 */

import React from 'react';

const Person = (props) => {
    return (
    <div>
        <p>Hello I am {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
    </div>
    );
}

export default Person;