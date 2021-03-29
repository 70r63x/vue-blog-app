<template>
    <span>
        <SliderCompoenent />

        <div class="center">
            <section id="content">
                
                <h2 class="subheader">Blog</h2>

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
    name: 'BlogComponent',
    components: {
        SliderCompoenent,
        SidebarCompoenent,
        ArticlesComponent
    },
    setup() {
        
    },
}
</script>