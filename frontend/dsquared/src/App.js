import React, { Component } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import "./App.css";
const axios = require("axios").default;

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDo: [],
      value: ""
    };
    this.deleteTask = this.deleteTask.bind(this);
    this.markThrough = this.markThrough.bind(this);
  }

  //this adds each new task to the this.state.toDo array
  //This will need to be the post request
  addString = e => {
    e.preventDefault();
    let task = {
      title: this.state.value,
      complete: false
    };
    let newArray = this.state.toDo.slice();
    newArray.push(task);
    this.setState({
      toDo: newArray,
      value: ""
    });
  };

  setToDo = (array) => {
    this.setState({
      toDo: array
    })
  }

  //this simply holds the value in the form
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  //this pulls the deleted task from the toDo array
  //this will need to be delete
  deleteTask = e => {
    let copyArray = this.state.toDo.slice(0);
    copyArray.splice(e, 1);
    this.setState({
      toDo: copyArray
    });
  };

  //this marks through selected task
  //this will need to be for a put request to change "completed" to true
  markThrough = e => {
    let paragraph = e.target.nextSibling;
    if (paragraph.classList.contains("mark-off")) {
      paragraph.classList.remove("mark-off");
    } else {
      paragraph.classList += " mark-off";
    }
    if (e.target.classList.contains("fa-square")) {
      e.target.classList.remove("fa-square");
      e.target.classList += " fa-check-square";
    } else {
      e.target.classList += " fa-square";
    }
  };

  render() {
    
    //on load, pull all the tasks from database and place in this.state.toDo
    axios
      .get("http://localhost:5000/task")
      .then(res => {
        let array = [];  
        res.data.map(el => {
          let obj = {
            title: el.title,
            complete: el.complete
          };
          array.push(obj);
        });
        return array
      }).then(array => {
        this.setToDo(array)
      })

    return (
      <div>
        <ToDoForm
          {...this.state}
          add={this.addString}
          change={this.handleChange}
        />
        <ToDoList
          list={this.state.toDo}
          delete={this.deleteTask}
          mark={this.markThrough}
        />
      </div>
    );
  }
}

export default App;
