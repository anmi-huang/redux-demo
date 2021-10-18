import React from 'react'
import { HashRouter, Route, Link, Switch, useParams, useHistory, useRouteMatch } from 'react-router-dom'
import AboutTodo from './AboutTodo'
import Home from '../../components/Home'
import Weather from './Weather'

export default function Main() {
    return (
        <HashRouter>
            <div>
                <ul className="px-5 py-2 d-flex bg-light">
                    <li className="mr-1 flex-grow-1">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-1">
                        <Link to="/weather">Weather</Link>
                    </li>
                    <li className="mr-1">
                        <Link to="/AboutTodo">ToDoList</Link>
                    </li>
                    <li className="mr-1">
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

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
            </div>
        </HashRouter>
    )
}

function Topics() {
    let { path, url } = useRouteMatch()

    return (
        <div className="mx-5 mt-1">
            <h1>Topics</h1>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>

                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    )
}

function Topic() {
    let { topicId } = useParams()
    console.log('topicId', topicId)
    return (
        <div>
            <h5>{topicId}</h5>
        </div>
    )
}
