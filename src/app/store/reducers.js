import { combineReducers } from "redux"
//action type
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"
const TOGGLE_TODO_COMPLETED = "TOGGLE_TODO_COMPLETED"
const WEATHER_DATA_CHANGE = "WEATHER_DATA_CHANGE"

//action
export const addTodo = (title,titleImg) => {
	return {
		type: ADD_TODO,
		todo: { title, isCompleted: false ,titleImg}
	}
}
export const deleteTodo = (idx) => {
	return {
		type: DELETE_TODO,
		idx
	}
}
export const toggleTodoCompleted = (idx) => {
	return {
		type: TOGGLE_TODO_COMPLETED,
		idx
	}
}
// fetchWeatherData 多包一層dispatch
export const fetchWeatherData = () => (dispatch) => {
	fetch("/static-api/aqi.json")
		.then((resp) => resp.json())
		.then(({ data }) => 

			dispatch({
				type: WEATHER_DATA_CHANGE,
				data: data[20]
			})

		)
}

//reducers
const todo = (
	state = JSON.parse(localStorage.getItem("listData")) || [],
	action
) => {
	const { type, todo, idx } = action
	let resultState
	switch (type) {
		case ADD_TODO:
			resultState = [...state, todo]
			break
		case DELETE_TODO:
			resultState = [...state.slice(0, idx), ...state.slice(idx + 1)]
			break
		case TOGGLE_TODO_COMPLETED:
			resultState = [
				...state.slice(0, idx),
				{
					...state[idx],
					isCompleted: !state[idx].isCompleted
				},
				...state.slice(idx + 1)
			]
			break
		default:
			resultState = state

	}

	localStorage.setItem("listData", JSON.stringify(resultState))

	return resultState
}
// weatherData
const weatherData = (state = null, action) => {
	const { type, data } = action
	switch (type) {
		case WEATHER_DATA_CHANGE:
			return data
		default:
			return state
	}
}

const reducers = combineReducers({
	todo,
	weatherData,
})

export default reducers
