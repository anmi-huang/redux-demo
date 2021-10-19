import React, { useState, useEffect } from 'react'
import Content from './Content'
import { Link, useParams, useHistory } from 'react-router-dom'
import SlideView from '../../../components/SlideView'
const HomePage = () => {
    const [data, setData] = useState([])
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
        if (!data || !locationId) return
        //如果是一樣的locationId，就不要render
        if (locationId !== locationData?.location) {
            setLocation(data.find((item) => item.location == locationId))
            console.log('city change')
        }
    }, [locationId, data])

    return (
        <div>
            <ul className="p-4">
                <div className="d-flex align-items-center h-6 mb-1  justify-content-between">
                    <p></p>
                    <h1 className="fz-18px">天氣資訊</h1>
                    <Link to="/">
                        <i className="icon icon-home mr-1 fz-20px text-secondary" aria-hidden="true"></i>
                    </Link>
                </div>
                {data.map((item, i) => (
                    <li className="mb-2" key={i}>
                        <Link
                            to={`/weather/${item.location}`}
                            className="btn justify-content-between w-100 h-6 px-2 rounded"
                        >
                            {item.location}
                            <i className="icon icon-arrow-right fz-13px" aria-hidden="true"></i>
                        </Link>
                    </li>
                ))}
            </ul>
            <SlideView isShow={locationId} className="bg-secondary">
                {locationData && (
                    <Content
                        locationData={locationData}
                        Back={() => {
                            history.goBack()
                        }}
                    ></Content>
                )}
            </SlideView>
        </div>
    )
}
export default React.memo(HomePage)
