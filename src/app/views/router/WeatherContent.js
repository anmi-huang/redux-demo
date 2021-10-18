import React from 'react'
function WeatherContent({ locationData, onClose }) {
    console.log('value', locationData)
    const location = locationData?.location,
        avgT = locationData?.T.elementValue.value,
        minT = locationData?.MinT.elementValue.value,
        maxT = locationData?.MaxT.elementValue.value,
        description = locationData?.WeatherDescription.elementValue.value,
        isActive = true
    return (
        <div>
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
