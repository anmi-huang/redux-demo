// combineReducers把多個不同 reducer 函數作為 value 的 object，合併成一個最終的 reducer 函數。
import { combineReducers } from 'redux'
//action type
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const TOGGLE_TODO_COMPLETED = 'TOGGLE_TODO_COMPLETED'
const WEATHER_DATA_CHANGE = 'WEATHER_DATA_CHANGE'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD_USER = 'ADD_USER'
const ADD_ADMIN = 'ADD_ADMIN'
const ADD_OUT = 'ADD_OUT'

export const loginUserT = () => {
    return {
        type: ADD_USER,
        user: { role: ['user'] },
    }
}
export const loginAdminT = () => {
    return {
        type: ADD_ADMIN,
        user: { role: ['user', 'admin'] },
    }
}
export const loginOutT = () => {
    return {
        type: ADD_OUT,
        user: { role: null },
    }
}

const userState = (state = {}, action) => {
    const { type, user } = action
    switch (type) {
        case ADD_USER:
            return { ...state, user }
        case ADD_ADMIN:
            return { ...state, user }
        case ADD_OUT:
            return { ...state, user }
        default:
            return state
    }
}

//action
export const addTodo = (title, titleImg) => {
    return {
        type: ADD_TODO,
        todo: { title, isCompleted: false, titleImg },
    }
}
export const deleteTodo = (idx) => {
    return {
        type: DELETE_TODO,
        idx,
    }
}
export const toggleTodoCompleted = (idx) => {
    return {
        type: TOGGLE_TODO_COMPLETED,
        idx,
    }
}
//reducer
const todo = (state = JSON.parse(localStorage.getItem('listData')) || [], action) => {
    const { type, todo, idx } = action
    let resultState
    switch (type) {
        case ADD_TODO:
            //state會直接將參數整個變成data新的值，用spread operator展開原始的data物件
            resultState = [...state, todo]
            break
        case DELETE_TODO:
            resultState = [...state.slice(0, idx), ...state.slice(idx + 1)]
            break
        case TOGGLE_TODO_COMPLETED:
            resultState = [
                ...state.slice(0, idx),
                { ...state[idx], isCompleted: !state[idx].isCompleted },
                ...state.slice(idx + 1),
            ]
            console.log('TOGGLE_TODO_COMPLETED', resultState)
            console.log('state[idx]', state[idx])
            break
        default:
            resultState = state
    }

    localStorage.setItem('listData', JSON.stringify(resultState))

    return resultState
}

//  處理Async
export const fetchWeatherData = () => (dispatch) => {
    // console.log(123)

    // setTimeout(() => {
    //     fetch('/static-api/aqi.json')
    //         .then((resp) => resp.json())
    //         .then(({ data }) =>
    //             dispatch({
    //                 type: WEATHER_DATA_CHANGE,
    //                 data: data[20],
    //             })
    //         )
    // }, 2000)

    fetch('/static-api/aqi.json')
        .then((resp) => resp.json())
        .then(({ data }) =>
            dispatch({
                type: WEATHER_DATA_CHANGE,
                data: data[20],
            })
        )
}

const weatherData = (state = null, action) => {
    const { type, data } = action
    switch (type) {
        case WEATHER_DATA_CHANGE:
            return data
        default:
            return state
    }
}

export const addCount = () => {
    return {
        type: INCREMENT,
    }
}
export const subCount = () => {
    return {
        type: DECREMENT,
    }
}

//state 初始值
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state >= 0 ? state + 1 : 0
        case 'DECREMENT':
            return state > 0 ? state - 1 : 0
        default:
            return state
    }
}

const reducers = combineReducers({
    todo,
    weatherData,
    counter,
    userState,
})

export default reducers
