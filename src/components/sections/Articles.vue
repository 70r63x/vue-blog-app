<template>
    <div id="articles" v-if="articlesData">
        <div class="loading" v-if="!articlesData">
            Cargando...
        </div>

        <div class="loading" v-if="articles && articles.length == 0">
            No hay articulos disponibles con la busqueda
        </div>
        <article class="article-item" id="article-template" v-for="article in articlesData" :key="article.title">
            <div class="image-wrap">
                <img :src="servidor +'/get-image/'+ article.image" :alt="article.title" v-if="article.image"/>
                <img :src="servidor +'/get-image/no-image.jpg'" :alt="article.title" v-else/>
            </div>

            <h2>{{article.title}}</h2>
            <span class="date">
                {{article.date | moment("from", "now")}}
            </span>
            <a href="#"></a>
            <router-link :to="{name: 'article', params: {id: article._id}}">Leer más</router-link>

            <div class="clearfix"></div>
        </article>

        <!--AÑADIR ARTICULOS VIA JS-->

    </div>
</template>

<script>
import {environment} from "../../environments/environments";

export default {
    name: 'ArticlesComponent',
    setup() {
        
    },
    props: [
        'articlesData'
    ],
    data(){
        return{
            servidor: environment.server
        }
    }
}
</script>