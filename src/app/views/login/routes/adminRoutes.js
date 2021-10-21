import Admin from '../admin'

const adminRoutes = [
    {
        path: '/admin',
        component: Admin,
        exact: true,
        role: 'admin', // 當前路由許可權
        backUrl: '/login', // 不滿足許可權跳轉的路由
    },
]

export default adminRoutes
