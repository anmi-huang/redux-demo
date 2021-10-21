import Weather from '../../router/weather'
const privateRoutes = [
    {
        path: '/weather/:locationId?',
        component: Weather,
        exact: true,
        role: 'user', // 當前路由許可權
        backUrl: '/login', // 不滿足許可權跳轉的路由
    },
]

export default privateRoutes
