import { createApp } from 'vue'
import App from './App.vue'

import store from "./store";
import router from "./router";
import axios from "./common/axios";
import apiModules from "./api/index";

import "./style.scss"

const app = createApp(App)

app.use(store)
app.use(router)
app.use(axios);
app.use(apiModules);
import VRipple from "./directives/ripple/ripple";
app.directive('ripple',VRipple);


app.mount('#app')
