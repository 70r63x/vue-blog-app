<template>
    <div id="slider" :class="{
        'slider-big': size === 'slider-big',
        'slider-small': size === 'slider-small'
    }">
        <h1>{{title}}</h1>
        <router-link to="/blog" class="btn-white" v-if="size === 'slider-big'">Ir al blog</router-link>
    </div>
</template>

<script>
export default {
    name: 'SliderComponent',
    props: [
        'title', 'size'
    ],
    setup() {
        
    },
}
</script>