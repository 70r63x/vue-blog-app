<template src="./New-article.html"></template>

<script>
import SidebarCompoenent from '../sections/Sidebar.vue';
import ArticleModel from "../models/Article-model";

import {environment} from "../../environments/environments";
import axios from "axios";

export default {
    name: 'EditArticleComponent',
    setup() {
        
    },
    components: {
        SidebarCompoenent
    },
    data(){
        return{
            servidor: environment.server,
            article: new ArticleModel('','', null, ''),
            file: '',
            isEdit: true
        }
    },
    mounted(){
        this.articleId = this.$route.params.id;
        this.getArticle(this.articleId);
    },
    methods:{
        getArticle(idArticle){
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
        sendForm(){

            axios.put(environment.server +'/article/'+this.articleId, this.article)
            .then(resp =>{
                if(resp.data.status === 'success'){

                    if(this.file !== null && this.file !== undefined && this.file !== ''){
                        const formData = new FormData();
                        formData.append(
                            'file0',
                            this.file,
                            this.file.name
                        )

                        axios.post(this.servidor+'/upload-image/'+resp.data.article._id, formData)
                        .then(resp =>{
                            if(resp.data.article){
                                this.article = resp.data.article;
                                this.$router.push('/blog/'+ this.articleId);
                            }else{
                                console.log("imagen no subida")
                            }
                        })
                    }else{
                        this.article = resp.data.article;
                        this.$router.push('/blog/'+ this.articleId);
                    } 
                }else{
                    console.log("Error al consultar data")
                }
            }, err =>{
                console.log(err);
            });
        },
        fileChange(){
            this.file = this.$refs.file.files[0];
        }
    }
}
</script>