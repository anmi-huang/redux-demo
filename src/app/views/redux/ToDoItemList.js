import React, { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoItemList = ({ data }) => {
    return (
        <ul>
            {data.map((item, i) => (
                <li key={i} className="mb-2 mb-0-last ">
                    <ToDoItem data={item} idx={i} />
                </li>
            ))}
        </ul>
    )
}
export default React.memo(ToDoItemList)
