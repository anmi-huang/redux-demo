import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//帶入要使用的action
import ToDoInputBlk from './ToDoInputBlk'
import ToDoItemList from './ToDoItemList'
import Air from './Air'
import Count from './Count'
import TodoListBlk from './TodoListBlk'

const ToDoListApp = (props) => {
    console.log('ToDoListApp')
    /*redux hook*/
    const todo = useSelector((state) => state.todo)
    const weatherData = useSelector((state) => state.weatherData)
    return (
        <div className="p-4 position-relative">
            <Air data={weatherData} />
            <ToDoInputBlk />
            <TodoListBlk />
            <Count />
            <div className="d-flex my-1 pb-2 border-bottom ">待辦事項</div>
            <ToDoItemList data={todo} />
        </div>
    )
}
export default React.memo(ToDoListApp)
