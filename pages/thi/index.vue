<template>
    <div>
        <form @submit.prevent="submitForm">
        <div>
            <label for="message">Mensagem:</label>
            <textarea name="message" id="message" cols="50" rows="4"></textarea>
        </div>
        <input type="file" id="myImage" name="myImage">
        <button type="submit">Enviar</button>
        </form>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'

const form = ref({
message: ''
})

const submitForm = async () => {
console.log("oi")
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
}
form div {
    display: flex;
    flex-direction: column;
}
button {
    width: 100%;
}
</style>