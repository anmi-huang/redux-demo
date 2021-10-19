import React from 'react'
import ToDoListApp from '../../redux/ToDoListApp'
const HomePage = () => {
    return (
        <div>
            <ToDoListApp />
        </div>
    )
}

export default React.memo(HomePage)
