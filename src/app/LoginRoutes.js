import React, { useState } from 'react'
import { HashRouter, Route, Link, Switch, useParams } from 'react-router-dom'
import publicRoutes from './constants/routes/publicRoutes'
import privateRoutes from './constants/routes/privateRoutes'
import adminRoutes from './constants/routes/adminRoutes'
import AuthRoute from './components/AuthRoute'
import { useSelector, useDispatch } from 'react-redux'
import { loginUserT, loginAdminT } from './store/reducers'

export default function Routes() {
    const [user, setUser] = useState({})
    const loginUser = () => {
        setUser({ role: ['user'] })
    }

    const loginAdmin = () => {
        setUser({
            role: ['user', 'admin'],
        })
    }

    const loginOut = () => {
        setUser({
            role: [],
        })
    }
    const dispatch = useDispatch()
    const user1 = dispatch(loginUserT()).user

    return (
        <HashRouter>
            <Switch>
                {publicRoutes.map(({ path, component, exact }) => (
                    <Route
                        key={path}
                        path={path}
                        exact={exact}
                        render={() => {
                            const Component = component
                            return <Component loginOut={loginOut} loginUser={loginUser} loginAdmin={loginAdmin} />
                        }}
                    />
                ))}
                {/* {privateRoutes.map((route) => (
                    <AuthRoute key={route.path} user={user} {...route} />
                ))} */}
                {adminRoutes.map((route) => (
                    <AuthRoute key={route.path} user={user} {...route} />
                ))}
                {privateRoutes.map((route) => (
                    <AuthRoute key={route.path} user={user1} {...route} />
                ))}
            </Switch>
        </HashRouter>
    )
}
