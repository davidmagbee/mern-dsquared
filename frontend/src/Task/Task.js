import React, { Component } from "react";
import Draggable from "react-draggable";
import SubTaskList from "../SubTaskList/SubTaskList";
import SubForm from "../SubForm/SubForm";
import Dropdown from "react-bootstrap/Dropdown";

import "../App.css";

class Task extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      subItem: [],
      value: "",
      form: false,
      selectedColor: ""
    };
    this.deleteTask = this.deleteTask.bind(this);
    this.markThrough = this.markThrough.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
    this.subForm = this.subForm.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.dropDown = this.dropDown.bind(this);
  }

  subForm() {
    console.log("subForm");
    this.setState({
      form: true
    });
  }
  deleteForm() {
    this.setState({
      form: false
    });
  }

  handleChange(e) {
    console.log(e.target);
    this.setState({
      value: e.target.value
    });
  }
  add(e) {
    e.preventDefault();
    let task = {
      title: this.state.value,
      complete: false
    };
    let newArray = this.state.subItem.slice(0);
    newArray.push(task);
    this.setState({
      subItem: newArray,
      value: "",
      form: false
    });
  }

  deleteTask(e) {
    console.log(e);
    let copyArray = this.state.subItem.slice(0);
    console.log(copyArray);
    copyArray.splice(e, 1);
    console.log(copyArray);
    this.setState({
      subItem: copyArray
    });
  }
  markThrough(e) {
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
  }

  dropDown = () => {
    let dropdown = this.myRef.current;
    dropdown.classList.toggle("show");
  };

  changeColor(color) {
    console.log(color);
    this.setState({
      selectedColor: color
    });
  }
  render() {
    let subItem;
    if (this.state.form) {
      subItem = (
        <SubForm
          delete={this.deleteForm}
          value={this.state.value}
          change={this.handleChange}
          add={this.add}
        />
      );
    }
    let colors = [
      "white",
      "#FDDAE3",
      "#8CFCA2",
      "#EE4397",
      "#D49CF1",
      "#A4B9A0",
      "#93A7F0",
      "#DBF6B0",
      "#E56B32"
    ];
    colors = colors.map((color, i) => {
      return (
        <li key={i}>
          <span
            className={`color-list-item ${
              this.state.selectedColor === color ? "selected" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => {
              this.changeColor(color);
              this.dropDown();
            }}
          />
        </li>
      );
    });

    return (
      <div
        className="task-box"
        style={{ backgroundColor: this.state.selectedColor }}
      >
        <div className="task-main">
          <div className="task">
            <i className="far fa-square" onClick={e => this.props.mark(e)}></i>
            <p>{this.props.task.title}</p>
          </div>
          <div className="task-icons">
            <div class="dropdown">
              <i class="fas fa-chevron-down" onClick={this.dropDown}></i>
              <ul id="dropDown" ref={this.myRef} class="dropdown-content">
                {colors}
              </ul>
            </div>
            <i className="fas fa-plus" onClick={this.subForm}></i>
            <i
              className="fas fa-times"
              onClick={() => this.props.onClick(this.props.index)}
            ></i>
          </div>
        </div>
        <SubTaskList
          delete={this.deleteTask}
          list={this.state.subItem}
          mark={this.markThrough}
        />
        {subItem}
      </div>
    );
  }
}

export default Task;
