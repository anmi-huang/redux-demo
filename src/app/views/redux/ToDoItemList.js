import React, { useState } from "react"
import ToDoItem from "./ToDoItem"
//data=傳進來的todo
//  <ToDoItemList data={todo} />
const ToDoItemList = ({ data }) => {
	return (
		<ul>
			{data.map((item, i) => (
				<li key={i} className="mb-2">
					<ToDoItem data={item} idx={i} />
				</li>
			))}
		</ul>
	)
}
export default React.memo(ToDoItemList)
