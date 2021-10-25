import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginState } from '../../store/reducers'
const Login = ({}) => {
    const dispatch = useDispatch()
    let history = useHistory()

    return (
        <div className="p-4 d-flex flex-column justify-content-center  align-content-center">
            <div className="d-flex align-items-center h-6 mb-1  justify-content-between m-1">
                <h1 className="fz-18px">登入頁面</h1>
                <Link to="/">
                    <i className="icon icon-home fz-20px text-secondary" aria-hidden="true"></i>
                </Link>
            </div>
            <button
                className="btn m-1"
                onClick={() => {
                    dispatch(loginState(['user']))
                    history.replace('/weather')
                }}
            >
                使用者登入
            </button>

            <button
                className="btn m-1"
                onClick={() => {
                    dispatch(loginState(['user', 'admin']))
                    history.replace('/admin')
                }}
            >
                管理員登入
            </button>
        </div>
    )
}
export default React.memo(Login)
