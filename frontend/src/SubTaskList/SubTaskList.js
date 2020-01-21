import React from 'react'
import SubItem from '../SubItem/SubItem'
import GridLayout from 'react-grid-layout'
import '../App.css'

function SubTaskList(props) {
    let children = props.list.map((el, i) => {
        return (
            <SubItem 
                key={"sub" + i} 
                delete={props.delete} 
                mark={props.mark}
                task={el}
                index={i}
            />
        )
    })

    return <div className="sub-task-list">{children}</div>
}

export default SubTaskList