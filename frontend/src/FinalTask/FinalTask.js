import React from 'react'
import '../App.css'

function FinalTask(props){
    return (
              <div className="sub-box">
        <div className="sub-main">
          <div className="sub-task">
            <i class="far fa-square" onClick={e => props.mark(e)}></i>
            <p>{props.task.title}</p>
          </div>
          <div className="task-icons">
            <i
              class="fas fa-times"
              onClick={() => props.delete(props.index)}
            ></i>
          </div>
        </div>
      </div>
    );

}

export default FinalTask