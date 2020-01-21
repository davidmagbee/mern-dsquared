import React, { Component } from "react";
import "../App.css";
import SubForm from '../SubForm/SubForm'
import FinalTaskList from '../FinalTaskList/FinalTaskList'

class SubItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalItems: [],
      value: "",
      form: false
    };
    this.deleteTask = this.deleteTask.bind(this)
    this.markThrough = this.markThrough.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.add = this.add.bind(this)
    this.subForm = this.subForm.bind(this)
    this.deleteForm = this.deleteForm.bind(this)
  }

  subForm(){
    console.log('subForm')
    this.setState({
      form: true
    })
  }
  deleteForm(){
    this.setState({
      form: false
    })
  }

  handleChange(e) {
    console.log(e.target)
  this.setState({
    value: e.target.value
  });
}
  add(e){
    e.preventDefault()
    let task = {
      title: this.state.value,
      complete: false
    }
    let newArray = this.state.finalItems.slice(0)
    newArray.push(task)
    this.setState({
      finalItems: newArray,
      value: '',
      form: false
    })
  }

  deleteTask(e){
    console.log(e)
    let copyArray = this.state.finalItems.slice(0)
    console.log(copyArray)
    copyArray.splice(e, 1)
    console.log(copyArray)
    this.setState({
      finalItems: copyArray
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
    let subItem
    if(this.state.form){
      subItem = <SubForm delete={this.deleteForm} add={this.add} value={this.state.value} change={this.handleChange} />
    }
    return (
      <div className="sub-box">
        <div className="sub-main">
          <div className="sub-task">
            <i class="far fa-square" onClick={e => this.props.mark(e)}></i>
            <p>{this.props.task.title}</p>
          </div>
          <div className="task-icons">
            <i class="fas fa-plus" onClick={this.subForm}></i>
            <i
              class="fas fa-times"
              onClick={() => this.props.delete(this.props.index)}
            ></i>
          </div>
        </div>
        <FinalTaskList delete={this.deleteTask} list={this.state.finalItems} mark={this.markThrough} />
        { subItem } 
      </div>
    );
  }
}

export default SubItem;
