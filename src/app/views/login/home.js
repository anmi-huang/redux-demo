import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginState } from '../../store/reducers'
const Home = ({}) => {
    const userState = useSelector((state) => state.userState)
    const dispatch = useDispatch()
    let history = useHistory()
    return (
        <div className="p-4 d-flex flex-column justify-content-center  align-content-center">
            <div className="my-2 d-flex align-items-center justify-content-between">
                <h1 className="fz-18px">首頁</h1>
                {userState?.user?.role && (
                    <button
                        onClick={() => {
                            dispatch(loginState(null))
                            history.replace('/login')
                            console.log('登出')
                        }}
                    >
                        <i className="icon icon-logout fz-22px" aria-hidden="true"></i>
                    </button>
                )}
            </div>
            <ul>
                {!userState?.user?.role && (
                    <li>
                        <Link className="btn mb-2  " to="/login">
                            登入
                        </Link>
                    </li>
                )}
                {userState?.user?.role && (
                    <li>
                        <Link className="btn mb-2" to="/weather">
                            天氣資訊
                        </Link>
                    </li>
                )}
                {userState?.user?.role?.length == 2 && (
                    <li>
                        <Link className="btn mb-2" to="/admin">
                            管理員資訊
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default React.memo(Home)
