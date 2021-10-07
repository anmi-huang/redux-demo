import React, { useState } from 'react'

const ToDoInputBlk = ({ onAdd }) => {
    //title等於addData
    console.log("ToDoInputBlk")
    const [title, setTitle] = useState("")
    const [titleImg, setImg] = useState("")
    return (
        <div className="d-flex">
            <input
                value={title}
                type="text "
                className="border rounded pl-2"
                placeholder="輸入代辦事項"
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                value={titleImg}
                type="text"
                className="border rounded pl-2"
                placeholder="輸入照片網址"
                onChange={(e) => setImg(e.target.value)}
            />
            <button
                className="btn rounded ml-1"
                onClick={() => {
                    onAdd(title,titleImg)
                    setTitle("")
                    setImg("")
                    // console.log("titleImg ",titleImg )
                }}
                disabled={!title}  
            >
                新增
            </button>
        </div>
    )
}
export default React.memo(ToDoInputBlk)
