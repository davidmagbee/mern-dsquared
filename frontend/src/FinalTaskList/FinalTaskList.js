import React from 'react'
import FinalTask from '../FinalTask/FinalTask'
import GridLayout from 'react-grid-layout'
import '../App.css'

function FinalTaskList(props) {
    let children = props.list.map((el, i) => {
        return (
            <FinalTask 
                key={"final" + i} 
                delete={props.delete} 
                mark={props.mark}
                task={el}
                index={i}
            />
        )
    })

    return <div className="final-task-list">{children}</div>
}

export default FinalTaskList