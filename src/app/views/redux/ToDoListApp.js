import React, { useEffect, useState, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
//帶入要使用的action
import { addTodo } from "store/reducers"
import ToDoInputBlk from "./ToDoInputBlk"
import ToDoItemList from "./ToDoItemList"
import Air from "./Air"

const ToDoListApp = (props) => {
    console.log("ToDoListApp")
    /*redux hook*/
    //useSelector選到reducers中的todo
    const todo = useSelector((state) => state.todo)
    const weatherData = useSelector((state) => state.weatherData)
    const dispatch = useDispatch()


    return (
        <div className="p-4">
            <Air data={weatherData} className="position-relative"/> 
            <ToDoInputBlk/>
            <button
                className="btn rounded my-1"
                onClick={() => {
                    dispatch(addTodo("喝水","https://unsplash.it/480/360?random=1"))
                    dispatch(addTodo("運動","https://unsplash.it/480/360?random=2"))
                    dispatch(addTodo("洗澡","https://unsplash.it/480/360?random=3"))
                    dispatch(addTodo("刷牙","https://unsplash.it/480/360?random=4"))
                }}
            >
                每日必做
            </button>
            <div className="d-flex my-2 pb-2  border-bottom">待辦事項</div>
            <ToDoItemList data={todo} />
        </div>
    )
}
export default React.memo(ToDoListApp)
