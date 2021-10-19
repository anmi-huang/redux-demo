import React from 'react'
function Content({ locationData, Back }) {
    const location = locationData?.location,
        avgT = locationData?.T.elementValue.value,
        minT = locationData?.MinT.elementValue.value,
        maxT = locationData?.MaxT.elementValue.value,
        description = locationData?.WeatherDescription.elementValue.value

    return (
        <div>
            <div className="p-4">
                <i className="justify-content-start icon icon-arrow-left" onClick={Back} aria-hidden="true"></i>
                <span className="sr-only">返回</span>
            </div>

            <div className="text-center px-2 py-1 fz-32px">{location}</div>
            <div className=" px-2 py-1 fz-56px">{avgT}°C</div>
            <div className=" px-2 py-1">最低溫度：{minT}°C</div>
            <div className=" px-2 py-1">最高溫度：{maxT}°C</div>
            <div className=" px-2 py-1 mx-2 ">{description}</div>
        </div>
    )
}
export default React.memo(Content)
