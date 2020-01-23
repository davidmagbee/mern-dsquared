import React, { Component } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import "./App.css";
// import Task from "./components/Task";
const axios = require("axios").default;

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDo: [],
      value: ""
    };
  }

  reRender = () => {
    axios
      .get("http://localhost:5000/task")
      .then(res => {
        let array = [];
        res.data.forEach(el => {
          let obj = {
            id: el._id,
            title: el.title,
            complete: el.complete
          };
          array.push(obj);
        });
        return array;
      })
      .then(array => {
        this.setToDo(array);
        this.setState({
          value: ""
        });
      });
  };
  componentDidMount() {
    this.reRender();
  }
  //this adds each new task to the this.state.toDo array
  //This will need to be the post request
  addString = e => {
    e.preventDefault();
    let task = {
      title: this.state.value,
      complete: false
    };
    axios.post("http://localhost:5000/task", task).then(() => {
      this.reRender();
    });
  };

  setToDo = array => {
    console.log(array);
    this.setState({
      toDo: array
      // value: ''
    });
  };

  //this simply holds the value in the form
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  //this pulls the deleted task from the toDo array
  //this will need to be delete
  deleteTask = e => {
    let array = this.state.toDo.slice(0);
    let id = array[e].id;
    // console.log(id)
    axios.delete(`http://localhost:5000/task/${id}`).then(() => {
      this.reRender();
    });
  };

  //this marks through selected task
  //this will need to be for a put request to change "completed" to true
  markThrough = e => {
    let array = this.state.toDo.slice(0);
    let id = array[e].id;
    let complete = array[e].complete;
    console.log(id);
    console.log(complete, !complete);
    axios
      .put(`http://localhost:5000/task/${id}`, {
        complete: !complete
      })
      .then(() => {
        this.reRender();
      });
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
