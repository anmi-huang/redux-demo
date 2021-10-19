import React from 'react'

const SlideView = ({ isShow, children }) => {
    return (
        <div
            className={`${isShow ? '' : 'trs-x-100'} 
        scroll-blk fixed-top w-100 h-100 py-2 text-center trs-all  bg-secondary`}
        >
            {children}
        </div>
    )
}

export default React.memo(SlideView)
