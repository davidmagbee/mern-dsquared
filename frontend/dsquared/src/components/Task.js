import React, { Component } from "react";
import "../App.css";

class Task extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      value: "",
      form: false,
      selectedColor: ""
    };
  }

  deleteTask = e => {
    console.log(e);
    let copyArray = this.state.subItem.slice(0);
    console.log(copyArray);
    copyArray.splice(e, 1);
    console.log(copyArray);
    this.setState({
      subItem: copyArray
    });
  };

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

  dropDown = () => {
    let dropdown = this.myRef.current;
    dropdown.classList.toggle("show");
  };

  changeColor = color => {
    this.setState({
      selectedColor: color
    });
  };
  render() {
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
            <i
              className="fas fa-times"
              onClick={() => this.props.onClick(this.props.index)}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
