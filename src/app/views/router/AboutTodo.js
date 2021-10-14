import React from 'react'
import ToDoListApp from '../redux/ToDoListApp'
const AboutTodo = () => {
    return (
        <div>
            <ToDoListApp />
        </div>
    )
}

export default React.memo(AboutTodo)
