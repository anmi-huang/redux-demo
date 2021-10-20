import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
// Provider讓整個react applicaiton都能取得Redux store的資料
const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
export default Root
