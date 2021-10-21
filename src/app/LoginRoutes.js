import React, { useState } from 'react'
import { HashRouter, Route, Link, Switch, useParams } from 'react-router-dom'
import publicRoutes from './views/login/routes/publicRoutes'
import privateRoutes from './views/login/routes/privateRoutes'
import adminRoutes from './views/login/routes/adminRoutes'
import AuthRoute from './components/AuthRoute'

export default function Routes() {
    //user 存取 role
    const [user, setUser] = useState({})
    // console.log('user', user)

    const loginUser = () => {
        setUser({
            role: ['user'],
        })
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
                {privateRoutes.map((route) => (
                    <AuthRoute key={route.path} user={user} {...route} />
                ))}
                {adminRoutes.map((route) => (
                    <AuthRoute key={route.path} user={user} {...route} />
                ))}
            </Switch>
        </HashRouter>
    )
}
