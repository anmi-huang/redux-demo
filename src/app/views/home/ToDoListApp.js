import React, { useEffect, useState, useCallback } from 'react'
import ToDoInputBlk from './ToDoInputBlk'
import ToDoItemList from './ToDoItemList'

const ToDoListApp = (props) => {
    console.log("ToDoListApp")
    const [todo, setTodo] = useState([])

    const onAdd = (title,titleImg) => {
        setTodo((arr) => [...arr, { title: title, isCompleted: false ,titleImg:titleImg}])
    }
    const onDelete = useCallback((idx) => {
        setTodo((arr) => [...arr.slice(0, idx), ...arr.slice(idx + 1)])
    }, [])
    const toggleCompleted = useCallback((idx) => {
        setTodo((arr) => [
            ...arr.slice(0, idx),
            {
                ...arr[idx],
                isCompleted: !arr[idx].isCompleted
            },
            ...arr.slice(idx + 1)
        ])
    }, [])

    useEffect(() => {
        setTodo(JSON.parse(localStorage.getItem('listData')) || [])
    }, [])

    useEffect(() => {
        localStorage.setItem('listData', JSON.stringify(todo))
    }, [todo])

    return (
        <div className="p-4">
            <ToDoInputBlk onAdd={onAdd} />
            <div className="d-flex my-2 pb-2  border-bottom">待辦事項</div>
            <ToDoItemList
                data={todo}
                onDelete={onDelete}
                toggleCompleted={toggleCompleted}
            />
        </div>
    )
}
export default React.memo(ToDoListApp)
