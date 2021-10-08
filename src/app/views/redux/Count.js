import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCount, subCount } from 'store/reducers'

const Count = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter)

    return (
        <div className="d-flex rounded my-1 mr-1 h-4">
            <button
                className="btn rounded mr-1 text-secondary w-4 h-4"
                onClick={() => {
                    dispatch(subCount())
                }}
            >
                <i className="icon icon-minus w-4 h-4"></i>
            </button>
            <button className=" rounded mr-1 px-1">{counter}</button>
            <button
                className="btn rounded text-secondary w-4 h-4"
                onClick={() => {
                    dispatch(addCount())
                }}
            >
                <i className="icon icon-add1"></i>
            </button>
        </div>
    )
}
export default React.memo(Count)
