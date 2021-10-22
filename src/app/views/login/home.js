import React from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { loginOutT } from '../../store/reducers'
const Home = ({ loginOut }) => {
    // const dispatch = useDispatch()
    let history = useHistory()
    return (
        <div className="p-4">
            <div className=" m-2 d-flex align-items-center justify-content-between">
                <h1 className="fz-18px">首頁</h1>
                <button
                    onClick={() => {
                        // dispatch(loginOutT())
                        loginOut()
                        history.replace('/login')
                        console.log('登出')
                    }}
                >
                    <i className="icon icon-logout fz-22px" aria-hidden="true"></i>
                </button>
            </div>
            <ul>
                <li>
                    <Link className="btn m-2" to="/login">
                        登入
                    </Link>
                </li>
                <li>
                    <Link className="btn m-2" to="/weather">
                        天氣資訊
                    </Link>
                </li>
                <li>
                    <Link className="btn m-2" to="/admin">
                        管理員資訊
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default React.memo(Home)
