import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginState } from '../../store/reducers'
const Login = ({}) => {
    const dispatch = useDispatch()
    let history = useHistory()

    return (
        <div className="p-4 d-flex flex-column justify-content-center  align-content-center">
            <div className="d-flex flex-shrink-0 position-relative  mb-1 m-1">
                <Link className="btn w-6 h-6 border-0 position-relative z-100" to="/">
                    <i className="icon icon-home fz-20px text-secondary" aria-hidden="true"></i>
                </Link>
                <h1 className="fz-18px d-flex justify-content-center align-items-center fill-parent font-weight-bolder">
                    登入頁面
                </h1>
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
