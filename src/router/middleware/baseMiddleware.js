import jwtDecode from 'jwt-decode'
export default function auth(to, from, next) {
    if (localStorage.getItem('userToken')) {
        // console.log()
        if (jwtDecode(localStorage.getItem('userToken')).user.role === 'supervisor') return next()
        else return next("/");
    }

    return next("/");
}