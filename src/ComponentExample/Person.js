/**
 *  this is a functional component
 *  
 */

import React from 'react';

const Person = (props) => {
    return <p>Hello I am {props.name} and I am {props.age} years old</p>;
}

export default Person;