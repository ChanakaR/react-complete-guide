import React, {useState} from 'react';
import Person from '../ComponentExample/Person';

const UseStateExample = (props) => {
    const [personState,personSetState] = useState({
        persons: [
            {name: "Bob", age: 25},
            {name: "Alice", age: 28},
            {name: "Ant", age: 35},
          ],
        otherStateValue: "This is the other state value",
    });

    const [otherStateTwo, setOtherStateTwo] = useState({
        otherStateTwoValue: "This is the other state TWO value",
    });

    const changePersonsStateHandler = ()=>{
        personSetState({
            persons: [
                {name: "Bobby", age: 21},
                {name: "Aliccy", age: 20},
                {name: "Antty", age: 39},
            ],
            otherStateValue: personState.otherStateValue,
        });
    }

    const changeStateTwoHandler = ()=>{
        setOtherStateTwo({
            otherStateTwoValue: "This is the other state TWO - NEW value",
        });
    }

    
    return (
        <div>
            <h1>Example - UseState hook</h1>
            <button onClick={changePersonsStateHandler}>Change Persons State</button>
            <button onClick={changeStateTwoHandler}>Change StaetTwo Values</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}>Hello I am the children code</Person>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
            <p>{otherStateTwo.otherStateTwoValue}</p>
        </div>
    );
}

export default UseStateExample;