import React, { useState } from 'react'
//data={item}
const ToDoItem = ({ data, idx, onDelete, toggleCompleted }) => {
	//title=item.content,isCompleted=item.isCompleted
	const { title, isCompleted, titleImg} = data
	console.log("titleImg ",data )
	return (
		<div className="d-flex justify-content-between align-items-center">
			<button
				className="d-flex flex-fill align-items-center miw-0"
				onClick={() => {
					toggleCompleted(idx)
				}}
			>
				<div className="d-flex justify-content-center align-items-center flex-shrink-0 w-3 h-3 mr-2 rounded-circle border">
					<div
						className={`${
							isCompleted ? '' : 'op-0'
						} w-2 h-2 rounded-circle bg-primary trs-all`}
					></div>
				</div>
				<img  className="w-10 h-10 mr-2" src={titleImg} alt=""/>
				<div className="text-truncate">{title}</div>
			</button>
			<button
				className="btn w-4 h-4 border-0"
				onClick={() => {
					onDelete(idx)
				}}
			>
				<i
					className="icon icon-delete text-danger"
					aria-hidden="true"
				></i>
			</button>
		</div>
	)
}
export default React.memo(ToDoItem)
