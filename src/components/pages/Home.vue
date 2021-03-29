<template>
    <span>
        <SliderCompoenent />

        <div class="center">
            <section id="content">
                
                <h2 class="subheader">Últimos artículos</h2>

                <ArticlesComponent />

            </section>

            <SidebarCompoenent />
        </div>
    </span>
</template>

<script>
import SliderCompoenent from '../sections/Slider.vue'
import SidebarCompoenent from '../sections/Sidebar.vue'
import ArticlesComponent from '../sections/Articles.vue'

export default {
    name: 'HomeComponent',
    components: {
        SliderCompoenent,
        SidebarCompoenent,
        ArticlesComponent
    },
    setup() {
        
    },
}
</script>