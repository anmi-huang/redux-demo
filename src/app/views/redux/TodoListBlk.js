import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from 'store/reducers'
const TodoListBlk = () => {
    const dispatch = useDispatch()
    return (
        <div className=" d-flex my-1">
            <button
                className="btn rounded bg-primary "
                onClick={() => {
                    dispatch(addTodo('喝水', 'https://unsplash.it/480/360?random=1'))
                    dispatch(addTodo('洗澡', 'https://unsplash.it/480/360?random=2'))
                    dispatch(addTodo('刷牙', 'https://unsplash.it/480/360?random=3'))
                }}
            >
                每日
            </button>
            <button
                className="btn rounded bg-danger "
                onClick={() => {
                    dispatch(addTodo('運動', 'https://unsplash.it/480/360?random=4'))
                }}
            >
                每週
            </button>
            <button
                className="btn rounded bg-success"
                onClick={() => {
                    dispatch(addTodo('打掃', 'https://unsplash.it/480/360?random=5'))
                }}
            >
                每月
            </button>
        </div>
    )
}
export default React.memo(TodoListBlk)
