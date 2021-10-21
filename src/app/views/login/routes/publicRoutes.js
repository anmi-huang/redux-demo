import Login from '../login'
import Home from '../home'

const publicRoutes = [
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '/',
        component: Home,
        exact: true,
    },
]

export default publicRoutes
