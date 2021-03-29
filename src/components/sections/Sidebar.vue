<template>
    <span>
        <aside id="sidebar">
            <div id="nav-blog" class="sidebar-item">
                <h3>Puedes hacer esto</h3>
                <router-link to="/crear-articulo" class="btn btn-success">Crear artículo</router-link>
            </div>

            <div id="search" class="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas</p>
                    <form @submit.prevent="busqueda()">
                        <input type="text" name="search" v-model="busquedaText" />
                        <input type="submit" name="submit" value="Buscar" class="btn" />
                    </form>
            </div>
        </aside>

        <div class="clearfix"></div>
    </span>
</template>

<script>
export default {
    name: 'SidebarComponent',
    setup() {
        
    },
    methods:{
        busqueda(){
            this.$router.push('/search/'+this.busquedaText);
        }
    },
    data(){
        return{
            busquedaText: ''
        }
    }
}
</script>