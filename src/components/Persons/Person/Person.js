import React from 'react';

import classes from './Person.css';

// import './Person.css';

const person = props => {
return (
        // <div className="Person" style={style}>
         <div className={classes.Person}>
            <p onClick={props.click}>I'am a {props.name}, and I am {props.age} years old ! Version:{React.version}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
        // </div>

        
    )
};

export default person;