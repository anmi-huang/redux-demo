import React from 'react'
import { HashRouter, Route, Link, Switch, useParams, useRouteMatch } from 'react-router-dom'
function HomePage() {
    let { path, url } = useRouteMatch()

    return (
        <div className="mx-5 mt-1">
            <Link className="d-inline-flex align-items-center h-6 mb-1 text-secondary " to="/">
                <i className="icon icon-home mr-1" aria-hidden="true"></i>
            </Link>
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

export default React.memo(HomePage)
