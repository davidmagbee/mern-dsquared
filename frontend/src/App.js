import React, { Component } from 'react';
import ToDoForm from './ToDoForm/ToDoForm'
import ToDoList from './ToDoList/ToDoList.js.js'
import './App.css';

class App extends Component { 
  constructor(){
    super()
    this.state={
      toDo: [],
      value: ''
    }
    this.addString = this.addString.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.markThrough = this.markThrough.bind(this)
  }

  addString(e){
    e.preventDefault()
    let task = {
      title: this.state.value,
      complete: false
    }
    let newArray = this.state.toDo.slice()
    newArray.push(task)
    this.setState({
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPositions: {
        x: -400, y: 200
      },
      toDo: newArray,
      value: ''
    })
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  deleteTask(e){
    let copyArray = this.state.toDo.slice(0)
    copyArray.splice(e, 1)
    this.setState({
      toDo: copyArray
    })
  }

  markThrough(e){
    let paragraph = e.target.nextSibling
    if(paragraph.classList.contains("mark-off")) {
      paragraph.classList.remove("mark-off")
    } else {
      paragraph.classList += " mark-off"   
    }
    if(e.target.classList.contains("fa-square")) {
      e.target.classList.remove("fa-square")
      e.target.classList += " fa-check-square"
    } else {
      e.target.classList += " fa-square"
    }
  }

  render() {
    return(
      <div>
        <ToDoForm {...this.state} add={this.addString} change={this.handleChange} />
        <ToDoList 
          list={this.state.toDo} 
          delete={this.deleteTask} 
          mark={this.markThrough}
          handleDrag={this.handleDrag}
          onStart={this.onStart}
          onStop={this.onStop}
        />       
      </div>
    )
  }
}

export default App;	