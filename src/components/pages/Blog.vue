<template>
    <span>
        <SliderCompoenent title="Blog" size="slider-small"/>

        <div class="center">
            <section id="content">
                
                <h2 class="subheader">Blog</h2>

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
    name: 'BlogComponent',
    components: {
        SliderCompoenent,
        SidebarCompoenent,
        ArticlesComponent
    },
    setup() {
        
    },
    mounted(){
        this.getArticles();
    },
    data(){
        return{
            articles: []
        }
    },
    methods:{
        getArticles(){
            axios.get(environment.server +'/articles')
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