import React, { useEffect, useState } from 'react'
import Spinner from 'components/Spinner'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
//帶入要使用的action
import { fetchWeatherData } from 'store/reducers'

const Air = ({ data }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchWeatherData())
    }, [])

    return (
        <div>
            <div className="position-absolute absolute-top-left">
                <Link className="d-inline-flex align-items-center h-6 text-secondary p-4 mt-4" to="/">
                    <i className="icon icon-home mr-1 fz-20px" aria-hidden="true"></i>
                </Link>
            </div>
            <div className="position-absolute absolute-top-right mt-4">
                {!data && <Spinner />}
                {data && (
                    <div className=" p-2 d-flex">
                        <div className="mr-1">{data.County}</div>
                        <div className="mr-1">AQI：{data.Status}</div>
                        <div className="mr-1">
                            空氣污染：
                            {data.Pollutant == '' ? '無' : data.Pollutant}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default React.memo(Air)
