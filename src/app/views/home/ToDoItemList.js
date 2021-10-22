import React, { useState } from 'react'
import ToDoItem from './ToDoItem'
const ToDoItemList = ({ data, onDelete, toggleCompleted }) => {
    return (
        <ul>
            {data.map((item, i) => (
                <li key={i} className="mb-2 mb-0-last">
                    <ToDoItem data={item} onDelete={onDelete} toggleCompleted={toggleCompleted} idx={i} />
                </li>
            ))}
        </ul>
    )
}
export default React.memo(ToDoItemList)
