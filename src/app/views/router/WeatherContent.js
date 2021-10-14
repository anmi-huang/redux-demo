import React from 'react'
function WeatherContent({ value, isActive, onClose }) {
    const { location, avgT, minT, maxT, description } = value
    console.log(value.location)
    return (
        <div
            className={`${
                isActive ? '' : 'trs-x-100'
            } scroll-blk fixed-top w-100 h-100 bg-secondary py-2 text-center trs-all`}
        >
            <i className="justify-content-start p-4 icon icon-arrow-left" onClick={onClose}></i>
            <div className="text-center px-2 py-1 fz-32px">{location}</div>
            <div className=" px-2 py-1 fz-56px">{avgT}°C</div>
            <div className=" px-2 py-1">最低溫度：{minT}°C</div>
            <div className=" px-2 py-1">最高溫度：{maxT}°C</div>
            <div className=" px-2 py-1 mx-2 ">{description}</div>
        </div>
    )
}
export default React.memo(WeatherContent)