<template>
    <div class="border">
        <form @submit.prevent="submitForm">
        <div>
            <label for="message">Mensagem de amor:</label>
            <textarea name="message" id="message" cols="50" rows="4" required></textarea>
        </div>
        <input type="file" id="myImage" name="myImage">
        <button type="submit">Enviar</button>
        </form>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const form = ref({ message: '' });

const submitForm = async () => {
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Thi',
      message: form.value.message,
    }),
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const post = await response.json();

  console.log(post);
};
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
    align-items: center;
    gap: .5rem;
}
form div textarea {
    background: white;
    border-radius: .5rem;
    max-width: 20rem;
    max-height: 12.5rem;
}
button {
  --bg: #9340b6;
  --text-color: #fff;
  position: relative;
  width: 100%;
  border: none;
  background: var(--bg);
  color: var(--text-color);
  padding: 1em;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.2s;
  border-radius: 5px;
  opacity: 0.8;
  letter-spacing: 1px;
  box-shadow: #69148e 0px 7px 2px, #000 0px 8px 5px;
}

button:hover {
  opacity: 1;
}

button:active {
  top: 4px;
  box-shadow: #69148e 0px 3px 2px,#000 0px 3px 5px;
}
</style>