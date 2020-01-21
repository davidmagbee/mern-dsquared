import React from 'react'
import Task from '../Task/Task'
import GridLayout from 'react-grid-layout'
import '../App.css'

function ToDoList(props) {
    let children = props.list.map((el, i) => {
        return (
            <Task 
                key={i} 
                onClick={props.delete} 
                mark={props.mark} 
                task={el} 
                index={i}
                // onStart={props.onStart}
                // onStop={props.onStop}
                // handleDrag={props.handleDrag}
            />
        )
    })

    return <div className="todo-list">{children}</div>
}

export default ToDoList