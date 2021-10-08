import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Spinner from 'components/Spinner'
import { fetchWeatherData } from 'store/reducers'

const Air = ({ data }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchWeatherData())
    }, [])
    console.log('data', data)
    return (
        <div className="position-absolute air-position">
            {!data && <Spinner />}
            {data && (
                <div className="  p-2 d-flex ">
                    <div className="mr-1">{data.County}</div>
                    <div className="mr-1">AQI：{data.Status}</div>
                    <div className="mr-1">
                        空氣污染：
                        {data.Pollutant == '' ? '無' : data.Pollutant}
                    </div>
                </div>
            )}
        </div>
    )
}
export default React.memo(Air)
