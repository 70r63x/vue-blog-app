<template>
    <span>
        <SliderCompoenent title="Formulario" size="slider-small" />

        <div class="center">
            <section id="content">
                
                <h2 class="subheader">Formulario</h2>

                <form class="mid-form" @submit.prevent="sendForm()">
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" v-model="user.nombre" />
                    </div>

                    <div class="form-group">
                        <label for="apellidos">Apellidos</label>
                        <input type="text" name="apellidos" v-model="user.apellido" />
                    </div>

                    <div class="form-group">
                        <label for="bio">Biografia</label>
                        <textarea name="bio" v-model="user.bio"></textarea>
                    </div>

                    <div class="form-group radibuttons">
                        <input type="radio" name="genero" value="hombre" v-model="user.genero" /> Hombre 
                        <input type="radio" name="genero" value="mujer" v-model="user.genero" /> Mujer 
                        <input type="radio" name="genero" value="otro" v-model="user.genero" /> Otro
                    </div>

                    <div class="clearfix"></div>

                    <input type="submit" value="Enviar" class="btn btn-success" />

                </form>

            </section>

            <SidebarCompoenent />
        </div>
    </span>
</template>

<script>
import SliderCompoenent from '../sections/Slider.vue'
import SidebarCompoenent from '../sections/Sidebar.vue'

export default {
    name: 'FormularioComponent',
    components: {
        SliderCompoenent,
        SidebarCompoenent
    },
    setup() {
        
    },
    methods:{
        sendForm(){
            console.log(this.user);
        }
    },
    data(){
        return{
            user: {
                nombre: '',
                apellido: '',
                bio: '',
                genero: ''
            }
        }
    }
}
</script>