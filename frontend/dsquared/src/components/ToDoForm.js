import React from 'react'
import '../App.css'

function ToDoForm(props){
    return (
        <form className='input-form' onSubmit={props.add}>
          <input className='input-box' type='text' value={props.value} onChange={props.change} placeholder="Type a Task!" />
          <input className='submit-box' type='submit' value='Submit' />
        </form>
    )
}

export default ToDoForm