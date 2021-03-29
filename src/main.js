import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import HomeComponent from "./components/pages/Home";
import BlogComponent from "./components/pages/Blog";
import FormularioComponent from "./components/pages/Formulario";
import PaginaComponent from "./components/pages/Pagina";
import SearchComponent from "./components/pages/Search";
import ArticleDetailComponent from "./components/pages/Article-detail";
import NewArticleComponent from "./components/pages/New-article";
import EditArticleComponent from "./components/pages/Edit-article";
import ErrorComponent from "./components/pages/Error404";


Vue.config.productionTip = false

Vue.use(VueRouter);
const moment = require('moment');
require('moment/locale/es');
Vue.use(require('vue-moment'),{moment});

const routes = [
  {path: '/', component: HomeComponent},
  {path: '/blog', component: BlogComponent},
  {path: '/blog/:id', name: 'article', component: ArticleDetailComponent},
  {path: '/formulario', component: FormularioComponent},
  {path: '/pagina', component: PaginaComponent},
  {path: '/search/:id', component: SearchComponent},
  {path: '/crear-articulo', component: NewArticleComponent},
  {path: '/editar-articulo/:id', name:'editar', component: EditArticleComponent},

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
