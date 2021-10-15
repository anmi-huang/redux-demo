import React from 'react'
// import { BrowserRouter as Switch, Route, Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { HashRouter, Route, Link, Switch, useParams, useHistory, useLocation } from 'react-router-dom'
export default function TrafficLight() {
    return (
        <HashRouter>
            <SwitchImage />
        </HashRouter>
    )
}

const imageData = [
    { id: 0, title: '紅燈', color: 'Crimson' },
    { id: 1, title: '黃燈', color: '#FFBF00' },
    { id: 2, title: '綠燈', color: '#16982B' },
]

function SwitchImage() {
    let location = useLocation()
    return (
        <div>
            <Switch>
                <Route exact path="/" children={<Home />} />
            </Switch>
            <Route path="/img/:id" children={<Modal />} />
        </div>
    )
}

function MinImage({ color }) {
    return <div className="rounded" style={{ width: 50, height: 50, background: color }} />
}

function Image({ color }) {
    return <div style={{ width: '100%', height: 300, background: color }} />
}

function Home() {
    let location = useLocation()
    return (
        <div className=" mt-5 d-flex align-content-center justify-content-center">
            {imageData.map((i) => (
                <Link
                    key={i.id}
                    to={{
                        pathname: `/img/${i.id}`,
                    }}
                >
                    <MinImage color={i.color} />
                </Link>
            ))}
        </div>
    )
}

function Modal() {
    let history = useHistory()
    let { id } = useParams()
    let image = imageData[parseInt(id)]

    if (!image) return null
    let back = (e) => {
        e.stopPropagation()
        history.goBack()
    }
    return (
        <div className="absolute-top-right absolute-bottom-left" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
            <div
                className="modal position-absolute p-2 rounded"
                style={{ background: '#fff', top: '15%', left: '15%', right: '15%' }}
            >
                <h1 className="text-center my-1">{image.title}</h1>
                <Image color={image.color} />
                <button type="button" className="btn mx-auto mt-2 rounded " onClick={back}>
                    Close
                </button>
            </div>
        </div>
    )
}
