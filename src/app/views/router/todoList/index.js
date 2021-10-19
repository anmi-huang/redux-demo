import React from 'react'
import ToDoListApp from '../../redux/ToDoListApp'
import { Link } from 'react-router-dom'
const HomePage = () => {
    return (
        <div>
            <Link className="d-inline-flex align-items-center h-6 text-secondary p-4 " to="/">
                <i className="icon icon-home mr-1" aria-hidden="true"></i>
            </Link>
            <ToDoListApp />
        </div>
    )
}

export default React.memo(HomePage)
