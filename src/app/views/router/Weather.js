import React, { useState, useEffect } from 'react'
import WeatherContent from './WeatherContent'
import { HashRouter, Route, Link, Switch, useParams, useHistory } from 'react-router-dom'
const HomePage = () => {
    const [data, setData] = useState([])
    const [isActive, setActive] = useState(false)
    const [locationData, setLocation] = useState(null)
    let history = useHistory()
    let { locationId } = useParams()

    useEffect(() => {
        fetch('static-api/forecast.json')
            .then((resp) => resp.json())
            .then(({ success, data }) => {
                setData(data)
            })
            .catch(console.error)
    }, [])
    useEffect(() => {
        if (data.length === 0 || !locationId) return
        console.log(data)
        setLocation(data.find((item) => item.location == locationId))
        console.log(
            'locationData',
            data.find((item) => item.location == locationId)
        )
    }, [locationId, data])
    return (
        <div>
            <ul className="p-4">
                {data.map((item, i) => (
                    <li className="mb-2" key={i}>
                        <Link
                            key={data[i].location}
                            to={{
                                pathname: `/weather/${data[i].location}`,
                            }}
                            className="btn justify-content-between w-100 h-6 px-2 rounded"
                        >
                            {item.location}
                            <i className="icon icon-arrow-right fz-13px" aria-hidden="true"></i>
                        </Link>
                    </li>
                ))}
            </ul>
            {/* <Switch>
                <Route exact path={`/weather/:${locationId}`}> */}

            <div
                className={`${
                    locationId ? '' : 'trs-x-100'
                } scroll-blk fixed-top w-100 h-100 bg-secondary py-2 text-center trs-all`}
            >
                {locationData && (
                    <WeatherContent
                        locationData={locationData}
                        // isActive={isActive}
                        onClose={() => {
                            setActive(false)
                            history.goBack()
                        }}
                    ></WeatherContent>
                )}
            </div>
            {/* </Route>
            </Switch> */}
        </div>
    )
}
export default React.memo(HomePage)
