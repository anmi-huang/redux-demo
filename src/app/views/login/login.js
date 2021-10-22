import React from 'react'
import { Link, useHistory } from 'react-router-dom'
const Login = ({ loginUser, loginAdmin }) => {
    let history = useHistory()
    const userLoginHandler = () => {
        loginUser() // 設定使用者權限
        history.replace('/weather') // 登入後跳轉後台畫面
    }

    const adminLoginHandler = () => {
        loginAdmin() //設定管理員權限
        history.replace('/admin') // 登入跳到管理畫面
    }

    return (
        <div className="p-4 d-flex flex-column justify-content-center  align-content-center">
            <div className="d-flex align-items-center h-6 mb-1  justify-content-between m-1">
                <h1 className="fz-18px">登入頁面</h1>
                <Link to="/">
                    <i className="icon icon-home fz-20px text-secondary" aria-hidden="true"></i>
                </Link>
            </div>
            <button className="btn m-1" onClick={userLoginHandler}>
                使用者登入
            </button>
            <button className="btn m-1" onClick={adminLoginHandler}>
                管理員登入
            </button>
        </div>
    )
}
export default React.memo(Login)
