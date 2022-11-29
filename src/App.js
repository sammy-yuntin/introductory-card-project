import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {name:"sammy" ,age:"10" },
      {name:"Whykay" ,age:"11" },
      {name:"Nath." ,age:"12" },
      {name:"Haywhy" ,age:"13" },
      {name:"Hayzed" ,age: "14"}

    ] 
  }

  switchNameHandler = (updatedname) => {
    /* console.log("button was clicked! ") */
    this.setState({
      persons: [
        {name:updatedname ,age:"21" },
        {name:"Whykay" ,age:"11" },
        {name:"Nath." ,age:"12" },
        {name:"Haywhy" ,age:"13" },
        {name:"Hayzed" ,age: "14"}
      ]

      
    })
  }  


  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name:"sammy" ,age:"21" },
        {name:"Whykay" ,age:"11" },
        {name:event.target.value ,age:"12" },  
        {name:"Haywhy" ,age:"13" },
        {name:event.target.value, age: "14"}
      ]

      
    })
  }

  
  render(){
    return (
      <div className="App" /* style={{border: "5px solid black"}} */>
        <h1>Hello Sammy</h1>
        <p>It really works</p>
        <button onClick={() => this.switchNameHandler("samora")} >Switch Name</button>
        <Person 
        name= {this.state.persons[0].name} 
        age={this.state.persons[0].age}/> 

        <Person 
        name= {this.state.persons[1].name} 
        age={this.state.persons[1].age}/> 

        <Person 
        clickWIthParagraph={this.switchNameHandler.bind(this, "Omo-Oye")} 
        name= {this.state.persons[2].name} 
        age={this.state.persons[2].age}
        /* changeName = {this.nameChangeHandler} *//> 

        
        <Person 
        clickWIthParagraph={this.switchNameHandler.bind(this, "Omo-Oye")} 
        name= {this.state.persons[4].name} 
        age={this.state.persons[4].age}
        changeName = {this.nameChangeHandler}/> 
        
        
      </div> 
    );
  
   /*  return React.createElement("div", {class: "App"}, React.createElement("h1",null, "Hello Sam, how are you today?")) */
  }
  

  }
  
export default App;
