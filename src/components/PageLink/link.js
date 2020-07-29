import Home from '../Home/Home'
import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import Gallery from '../Gallery/Gallery'
import Logo from '../Logo/Logo'

const route = [
    {
        component: Logo,
        path:'/logo'
    },
    {
        component: Home,
        path:'/'
    },
    {
        component: About,
        path:'/about_us'
    },
    {
        component: Services,
        path:'/services'
    },
    {
        component: Contact,
        path:'/contact'
    },
    {
        component: Gallery,
        path:'/gallery'
    },

];

const connect = [
    {
        content:'Logo',
        to:'/logo'
    },
    {
        content:'Home',
        to: '/'
    },
    {
        content:'About',
        to: '/about_us'
    },
    {
        content:'Services',
        to: '/services'
    },
    {
        content:'Contact',
        to: '/contact'
    },
    {
        content:'Gallery',
        to:'/gallery'
    }
]


export { route, connect}