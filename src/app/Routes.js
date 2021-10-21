import React from 'react'
import { HashRouter, Route, Link, Switch, useParams, useRouteMatch } from 'react-router-dom'
import AboutTodo from './views/router/todoList/index'
import Home from './views/router/home/index'
import Weather from './views/router/weather/index'
import Topics from './views/router/Topics/index'

export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/topics">
                    <Topics />
                </Route>
                {/* ?不管也沒有值都要顯示 */}
                <Route path="/weather/:locationId?">
                    <Weather />
                </Route>
                <Route path="/AboutTodo">
                    <AboutTodo />
                </Route>
            </Switch>
        </HashRouter>
    )
}
