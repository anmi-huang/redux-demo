import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function AuthRoute(props) {
    const {
        user: { role: userRole }, //現在可以使用權限的資格[]
        role: routeRole, //當前的登入使用者
        backUrl,
    } = props
    console.log('userRole', userRole)
    // 如果使用者有權限，就render對應的路由

    if (userRole && userRole.indexOf(routeRole) > -1) {
        return <Route {...props} />
    } else {
        // 如果沒有許可權，返回配置的預設路由
        return <Redirect to={backUrl} />
    }
}

export default AuthRoute
