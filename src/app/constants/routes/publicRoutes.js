import Login from '../../views/login/Login'
import Home from '../../views/login/Home'

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
