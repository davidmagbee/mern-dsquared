import React from "react";
import Task from "./Task";
import "../App.css";

function ToDoList(props) {
    let children 
  if (props.list) {
    children = props.list.map((el, i) => {
      return (
        <Task
          key={i}
          onClick={props.delete}
          mark={props.mark}
          task={el}
          index={i}
        />
      );
    });
  }

  return <div className="todo-list">{children}</div>;
}

export default ToDoList;
