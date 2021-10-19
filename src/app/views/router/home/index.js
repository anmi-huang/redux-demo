import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
    return (
        <div>
            <ul className="px-5 py-2 d-flex bg-light">
                <li className="mr-1 flex-grow-1">Home</li>
                <li className="mr-1">
                    <Link to="/weather">Weather</Link>
                </li>
                <li className="mr-1">
                    <Link to="/AboutTodo">ToDoList</Link>
                </li>
                <li className="mr-1">
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>
            <ul className="p-4">
                <li className="mb-1">
                    <Link className="btn justify-content-start h-6 rounded" to="/weather">
                        天氣
                    </Link>
                </li>
                <li className="mb-1">
                    <Link className="btn justify-content-start h-6 rounded" to="/AboutTodo">
                        備忘錄
                    </Link>
                </li>
                <li className="mb-1">
                    <Link className="btn justify-content-start h-6 rounded" to="/topics">
                        Topics
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default React.memo(HomePage)
