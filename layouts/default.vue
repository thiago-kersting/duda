<template>
    <div class="container">
        <nuxt-link v-if="route.path !== '/'" to="/" class="home">HOME</nuxt-link>
        <slot />
        <h4 class="createdby">created by Thiago Kersting Puls</h4>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.border {
    padding: 1rem;
    background-color: white;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
.container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    background: rgb(228,3,180);
    background: -moz-linear-gradient(90deg, rgba(228,3,180,1) 0%, rgba(119,3,228,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(228,3,180,1) 0%, rgba(119,3,228,1) 100%);
    background: linear-gradient(90deg, rgba(228,3,180,1) 0%, rgba(119,3,228,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#e403b4",endColorstr="#7703e4",GradientType=1);
}
.home {
    position: absolute;
    top: 2rem;
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    padding: 1rem;
} 
.createdby {
    color: white;
    position: absolute;
    bottom: 1rem;   
}
</style>