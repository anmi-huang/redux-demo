import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function AuthRoute(props) {
    const {
        user: { role: userRole }, //userRole=[],可以拜訪路由
        role: routeRole, //當前路由
        backUrl,
    } = props
    console.log('userRole', userRole)

    // 如果使用者有權限，就render對應的路由
    if (userRole && userRole.indexOf(routeRole) > -1) {
        return <Route {...props} />
    } else {
        // 返回配置路由
        return <Redirect to={backUrl} />
    }
}

export default AuthRoute
