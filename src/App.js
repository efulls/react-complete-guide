import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:'Saeful',age:28},
      {name:'Lufi',age:27},
      {name:'Yuwan',age:26}
    ],
    otherState:'some other value',
    showPersons:false
  }

  switchNameHandler = (newName)=> {
    // console.log('Was Clicked!!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  this.setState({persons:[
      {name:newName,age:28},
      {name:'Lufi',age:27},
      {name:'Yuwan',age:26}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({persons:[
      {name:'Eful',age:28},
      {name:event.target.value,age:27},
      {name:'Yuwan',age:25}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }



  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons =(
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,'Hamilton')}
            changed={this.nameChangedHandler}>My Hobbies: Reading</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div>
      )
    }


    return (
      <div className="App">
        <h1>Hi, iam react App</h1>
        <p>This is really working!</p>
        <button
        style={style} 
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
