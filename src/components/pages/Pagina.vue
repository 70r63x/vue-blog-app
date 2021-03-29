<template>
    <span>
        <SliderCompoenent title="Pagina" size="slider-small"/>

        <div class="center">
            <section id="content">
                
                <h2 class="subheader">Pagina de prueba</h2>
                <input type="text" v-model="nombre">
                {{nombre | mayusculas}}

                <input type="number" v-model="edad">
                {{edad}}

                <p v-if="edad > 18">Hola mayor</p>
                <p v-else>Hola menor</p>

                <ul>
                    <li v-for="pelicula in pelis" v-bind:key="pelicula">{{pelicula}}</li>
                </ul>
            </section>
        </div>
    </span>
</template>

<script>
import SliderCompoenent from '../sections/Slider.vue'

export default {
    name: 'PaginaComponent',
    components: {
        SliderCompoenent
    },
    setup(){

    },
    filters:{
        mayusculas (value){
            return value.toUpperCase();
        }
    },
    data() {
        return{
            nombre: '',
            edad: null,
            pelis: [
                "Batman", "spiderman", "Superman"
            ]
        }
    },
}
</script>