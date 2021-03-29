import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import HomeComponent from "./components/pages/Home";
import BlogComponent from "./components/pages/Blog";
import FormularioComponent from "./components/pages/Formulario";
import PaginaComponent from "./components/pages/Pagina";
import ErrorComponent from "./components/pages/Error404";


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/', component: HomeComponent},
  {path: '/blog', component: BlogComponent},
  {path: '/formulario', component: FormularioComponent},
  {path: '/pagina', component: PaginaComponent},

  {path: '**', component: ErrorComponent}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
