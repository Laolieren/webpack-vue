import login from "../components/login.vue"
import register from "../components/register.vue"
export default {
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/register',
            component: register
        }
    ]
}