import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import Person from './Person/Person';


const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer; 
  
  &:hover{
    background-color: lightgreen;
    color: black;
  }
`;

class App extends Component {
  state = {
    persons:[
      {id:'1', name:'Saeful',age:28},
      {id:'2', name:'Lufi',age:27},
      {id:'3', name:'Yuwan',age:26}
    ],
    otherState:'some other value',
    showPersons:false
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // Alternatif
    // const person = Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }



  render() {
    const style = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    };

    let persons = null;
    if(this.state.showPersons){
      persons =(
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event,person.id)}/>
          })}
        </div>
      );
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor:'salmon',
        color:'black'
      };
    }

    // let classes =['red','bold'].join(' ');
    const classes =[];
    if(this.state.persons.length <=2){
      classes.push('red');//clasess =['red]
    }
    if(this.state.persons.length <=1){
      classes.push('bold');//clasess = ['red bold']
    }

    return (
        <div className="App">
          <h1>Hi, iam react App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <StyledButton onClick={this.togglePersonsHandler}>
            Toggle Persons
          </StyledButton>
          {persons}
        </div>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
