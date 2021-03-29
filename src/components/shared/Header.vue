<template>
    <header id="header">
        <div class="center">
            <!-- LOGO -->
            <div id="logo">
                <img src="../../assets/logo.png" class="app-logo" alt="Logotipo" />
                <span id="brand">
                    <strong>Vue</strong> Blog
                </span>
            </div>
            
            <!-- MENU -->
            <nav id="menu">
                <ul>
                    <li>
                        <router-link to="/" active-class="menuActive">Inicio</router-link>
                    </li>
                    <li>
                        <router-link to="/blog" active-class="menuActive">Blog</router-link>
                    </li>
                    <li>
                        <router-link to="/formulario" active-class="menuActive">Formulario</router-link>
                    </li>
                    <li>
                        <router-link to="/pagina" active-class="menuActive">Pagina 1</router-link>
                    </li>
                    <li>
                        <router-link to="/pagina" active-class="menuActive">Pagina 2</router-link>
                    </li>                            
                </ul>
            </nav>

            <!--LIMPIAR FLOTADOS-->
            <div class="clearfix"></div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    setup() {
        
    },
}
</script>
