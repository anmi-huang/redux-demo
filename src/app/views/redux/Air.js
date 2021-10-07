import React, { useState } from "react"
// import { useDispatch } from "react-redux"
import Spinner from 'components/Spinner'

const Air= ({ data }) => {

    console.log("data",data)
    return (
     <div className="position-absolute air-position"> 
        {!data && <Spinner />}
        {data && (
            <div className="d-flex p-2 ">
                <div className="d-flex ">
                    <div className="d-flex mr-1">
                        <div>{data.County}</div>
                    </div>
                    <div className="d-flex mr-1">
                        <div>AQI：</div>
                        <div>{data.Status}</div>
                    </div>
                    <div className="d-flex mr-1">
                        <div>空氣污染指標物：</div>
                        <div>{data.Pollutant == '' ? '無' : data.Pollutant}</div>
                    </div>
                </div>
            </div>
        )}

    
    </div>
    )
}
export default React.memo(Air)
