<template>
    <div class="center">
        <section id="content">

                <article class="article-item article-detail" v-if="article">
                    <div class="image-wrap">
                        <img :src="servidor +'/get-image/'+ article.image" :alt="article.title" v-if="article.image"/>
                        <img :src="servidor +'/get-image/no-image.jpg'" :alt="article.title" v-else/>
                    </div>

                    <h1 class="subheader">{{article.title}}</h1>
                    <span class="date">
                        {{article.date | moment("from", "now")}}
                    </span>
                    <p>
                        {{article.content}}
                    </p>

                    <router-link :to="{name: 'editar', params: {id: article._id}}" class="btn btn-success">Editar</router-link>
                    <a @click="deleteArticle(article._id)" class="btn btn-success">Borrar</a>

                    <div class="clearfix"></div>
                </article>
            
        </section>

        <SidebarCompoenent />
    </div>
</template>

<script>
import SidebarCompoenent from '../sections/Sidebar.vue'
import {environment} from "../../environments/environments";

import axios from "axios";

export default {
    name: 'ArticleDetailComponent',
    components: {
        SidebarCompoenent
    },
    setup() {
        
    },
    data(){
        return{
            servidor: environment.server,
            article: null
        }
    },
    mounted(){
        this.articleId = this.$route.params.id;
        this.getArticleSearch(this.articleId);
    },
    methods:{
        getArticleSearch(idArticle){
            axios.get(environment.server +'/article/'+idArticle)
            .then(resp =>{
                if(resp.data.status === 'success'){
                    this.article = resp.data.article
                    console.log(this.article);
                }else{
                    console.log("Error al consultar data")
                }
            }, err =>{
                console.log(err);
            });
        },
        deleteArticle(idArticle){
            axios.delete(this.servidor+"/article/"+idArticle)
            .then(resp =>{
                if(resp.data.status === 'success'){
                    this.$router.push('/blog');
                }else{
                    console.log("articulo no eliminado");
                }
            })
        }
    }
}
</script>