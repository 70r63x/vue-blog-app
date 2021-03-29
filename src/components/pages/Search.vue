<template>
    <span>
        <SliderCompoenent :title="'Busqueda: '+textSeacrh" size="slider-small"/>

        <div class="center">
            <section id="content">
                
                <h2 class="subheader">articulos encontrados</h2>
                <span v-if="articles.length > 0">
                    <ArticlesComponent :articlesData="articles" />
                </span>

            </section>

            <SidebarCompoenent />
        </div>
    </span>
</template>

<script>
import SliderCompoenent from '../sections/Slider.vue'
import SidebarCompoenent from '../sections/Sidebar.vue'
import ArticlesComponent from '../sections/Articles.vue'

import {environment} from "../../environments/environments";

import axios from "axios";

export default {
    name: 'SearchComponent',
    components: {
        SliderCompoenent,
        SidebarCompoenent,
        ArticlesComponent
    },
    setup() {
        
    },
    mounted(){
        this.textSeacrh = this.$route.params.id;
        this.getArticlesSearch(this.textSeacrh);
    },
    data(){
        return{
            articles: [],
            textSeacrh: null
        }
    },
    methods:{
        getArticlesSearch(search){
            axios.get(environment.server +'/search/'+search)
            .then(resp =>{
                if(resp.data.status === 'success'){
                    this.articles = resp.data.articles
                    console.log(this.articles);
                }else{
                    console.log("Error al consultar data")
                }
            }, err =>{
                console.log(err);
            });
        }
    }
}
</script>