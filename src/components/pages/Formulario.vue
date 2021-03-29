<template>
    <span>
        <SliderCompoenent />

        <div class="center">
            <section id="content">
                
                <h2 class="subheader">Formulario</h2>

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
}
</script>