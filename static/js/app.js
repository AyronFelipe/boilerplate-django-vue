import Vue from 'vue';
import Router from 'vue-router';
import Main from './components/Main.vue';


Vue.use(Router);

const routes = [
    // Here your routes
    { path: '/', name: 'mainly', component: Main },
]

const router = new Router({ routes });

new Vue({
    el: '#app',
    router,
    template: '<Main />',
    components: { Main }
});