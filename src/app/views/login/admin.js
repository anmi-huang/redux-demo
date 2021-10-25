import React from 'react'
import { Link } from 'react-router-dom'
const Admin = () => {
    return (
        <div className="p-4">
            <Link to="/">
                <i className=" d-block icon icon-home fz-20px text-secondary " aria-hidden="true"></i>
            </Link>
            <div className="m-2">
                <i className="icon icon-service fz-60px" aria-hidden="true"></i>
                <h1 className="text-center font-weight-bold p-1">管理員</h1>
            </div>
        </div>
    )
}
export default React.memo(Admin)
