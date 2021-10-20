import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from 'store/reducers'
const ToDoInputBlk = () => {
    console.log('ToDoInputBlk')
    const [title, setTitle] = useState('')
    const [titleImg, setImg] = useState('')
    const dispatch = useDispatch()
    return (
        <div>
            <div className="d-flex mt-10 ">
                <input
                    value={title}
                    type="text"
                    className="border rounded pl-2 mr-1 h-4"
                    placeholder="輸入代辦事項"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    value={titleImg}
                    type="text"
                    className="border rounded pl-2 h-4"
                    placeholder="輸入照片網址"
                    onChange={(e) => setImg(e.target.value)}
                />

                <button
                    className="btn rounded ml-1"
                    onClick={() => {
                        dispatch(addTodo(title, titleImg))
                    }}
                    disabled={!title}
                >
                    新增
                </button>
            </div>
        </div>
    )
}
export default React.memo(ToDoInputBlk)
