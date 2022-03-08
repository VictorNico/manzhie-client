import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
// import authSup from "./middleware/auth-sup.js"
const routes = [{
    path: '/',
    name: 'Accueil',
    /* beforeEnter: authSup, */
    component: () =>
        import ('../App.vue'),
    /* children: [{
            path: '',
            component: () =>
                import ('../components/reservation/steps/TravelDetails.vue'),
        },
    ], */

}, ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;