import { RouterOptions } from 'vue-router';

import App from './components/App.vue';
import SiteDetail from './components/SiteDetail.vue';

const routes: RouterOptions["routes"] = [
    { path: '/', component: App },
    { path: '/site_detail', component: SiteDetail },
]

export default routes;