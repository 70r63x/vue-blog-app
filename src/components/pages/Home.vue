<template>
    <span>
        <SliderCompoenent title="Bienvenido al Blog practico con Vue y NodeJS (Express)" size="slider-big"/>

        <div class="center">
            <section id="content">
                
                <h2 class="subheader">Últimos artículos</h2>

                <ArticlesComponent :articlesData="articles"/>

            </section>

            <SidebarCompoenent />
        </div>
    </span>
</template>

<script>
import SliderCompoenent from '../sections/Slider.vue'
import SidebarCompoenent from '../sections/Sidebar.vue'
import ArticlesComponent from '../sections/Articles.vue'

import axios from "axios";
import {environment} from "../../environments/environments";

export default {
    name: 'HomeComponent',
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
            axios.get(environment.server +'/articles/true')
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