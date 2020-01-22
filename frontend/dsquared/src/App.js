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
  componentDidMount(){
    axios
      .get("http://localhost:5000/task")
      .then(res => {
        let array = [];  
        res.data.map(el => {
          let obj = {
            id: el._id,
            title: el.title,
            complete: el.complete
          };
          array.push(obj);
        });
        return array
      }).then(array => {
        this.setToDo(array)
      })
  }
  //this adds each new task to the this.state.toDo array
  //This will need to be the post request
  addString = e => {
    e.preventDefault();
    let task = {
      title: this.state.value,
      complete: false
    };
    axios
      .post("http://localhost:5000/task", 
        task
      )
      .then(() => {
        axios.get("http://localhost:5000/task")
        .then(res => {
          let array = [];  
          res.data.map(el => {
            let obj = {
              id: el._id,
              title: el.title,
              complete: el.complete
            };
            array.push(obj);
          });
          return array
        }).then(array => {
          this.setToDo(array)
          this.setState({
            value: ''
          })
        })
      });
  };

  setToDo = (array) => {
    console.log(array)
    this.setState({
      toDo: array
      // value: ''
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
    console.log(e)
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
