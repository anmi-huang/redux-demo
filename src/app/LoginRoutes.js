import React, { useState } from 'react'
import { HashRouter, Route, Link, Switch, useParams } from 'react-router-dom'
import publicRoutes from './constants/routes/publicRoutes'
import privateRoutes from './constants/routes/privateRoutes'
import adminRoutes from './constants/routes/adminRoutes'
import AuthRoute from './components/AuthRoute'
import { useDispatch, useSelector } from 'react-redux'
export default function Routes() {
    const userState = useSelector((state) => state.userState)

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
                            return <Component />
                        }}
                    />
                ))}
                {privateRoutes.map((route) => (
                    <AuthRoute key={route.path} user={userState.user} {...route} />
                ))}
                {adminRoutes.map((route) => (
                    <AuthRoute key={route.path} user={userState.user} {...route} />
                ))}
            </Switch>
        </HashRouter>
    )
}
