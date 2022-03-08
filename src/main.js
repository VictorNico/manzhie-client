import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
// import 'prismjs/themes/prism-coy.css';

import { createApp } from 'vue'
import router from './router/router';
import Vuex from 'vuex';
import App from './App.vue'
import PrimeVue from 'primevue/config';
import AutoComplete from 'primevue/autocomplete';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dialog from 'primevue/dialog';
import ProgressSpinner from 'primevue/progressspinner';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Skeleton from 'primevue/skeleton';

// import primevue directives
import Tooltip from 'primevue/tooltip';

import BadgeDirective from 'primevue/badgedirective';

import Ripple from 'primevue/ripple';

import StyleClass from 'primevue/styleclass';

// import dotenv for environment production
import dotenv from 'dotenv'
dotenv.config()

// set window at position (0,0) before each routing
router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0);
    next();
});

// create instanceof vue app
const app = createApp(App);

/* app.config.globalProperties.$appState = reactive({ theme: 'lara-light-indigo', darkTheme: false });
 */

// use import service in app
app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });
app.use(ConfirmationService);
app.use(ToastService);
app.use(router);
app.use(Vuex);

// import local db base on flux model
import store from './store';
// use it 
app.use(store)

// use primevue customize directives in app
app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);
app.directive('badge', BadgeDirective);
app.directive('styleclass', StyleClass);
// add import components to our application
app.component('AutoComplete', AutoComplete);
app.component('ConfirmDialog', ConfirmDialog);
app.component('ConfirmPopup', ConfirmPopup);
app.component('ContextMenu', ContextMenu);
app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('Dialog', Dialog);
app.component('ProgressSpinner', ProgressSpinner);
app.component('Skeleton', Skeleton);
app.component('Toast', Toast);

// mount our app div with id equals to app
app.mount('#app');