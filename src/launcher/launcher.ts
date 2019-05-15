import Vue from 'vue'
import VueRouter from 'vue-router';

import { store } from './store';
import App from './components/App.vue';
import routes from './routes';

const router = new VueRouter({
    mode: 'history',
    routes
});

let vue = new Vue({
    el: '#app',
    store: store,
    render: h => h(App),
    router
});

vue.$store.dispatch('updateFromStorage');
