import React from "react";
import "../App.css";

function SubForm(props) {
  return (
    <div className="sub-box">
      <div className="sub-main">
        <div className="sub-task">
          <form className="sub-form" onSubmit={props.add}>
            <input
              className="sub-form"
              type="text"
              value={props.value}
              onChange={props.change}
              placeholder="Type a Task!"
            />
          </form>
        </div>
        <div className="task-icons">
          <i
            class="fas fa-times"
            onClick={() => props.delete()}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default SubForm;
