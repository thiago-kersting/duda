<template>
  <div style="margin-bottom: 6rem" />
  <div class="border">
    <form @submit.prevent="submitForm">
      <div>
        <label for="message">Envie uma mensagem de amor {{ otherName }}:</label>
        <textarea v-model="message.text" name="message" id="message" cols="50" rows="4" required></textarea>
      </div>
      <button class="submitBtn" type="submit">Enviar</button>
    </form>
  </div>
  <div class="border border-messages">
    <p>Mensagens de amor:</p>
    <div class="messages">
      <div v-for="(message, index) in paginatedMessages" :key="index">
        <p class="name" :style="{ color: getColor(message.name) }">{{ message.name }}:</p>
        <p class="text">{{ message.message }}</p>
        <p class="date">{{ messageStore.formatarData(message.createdAt) }}</p>
      </div>
      <button class="submitBtn loadMoreBtn" v-if="hasMoreMessages" @click="loadMore">Carregar mais</button>
    </div>
  </div>
  <div style="margin-top: 6rem" />
</template>

<script setup>
const messageStore = useMessageStore();
const messages = messageStore.messages.reverse()
const message = ref({ text: '' });
const route = useRoute();
let page = ref(1);
const pageSize = 5;
let hasMoreMessages = computed(() => page.value * pageSize < messages.length);
let paginatedMessages = computed(() => messages.slice(0, page.value * pageSize));

const loadMore = () => {
  page.value++;
}

onMounted(async () => {
  await messageStore.getAll();
});

const getColor = (name) => {
  if(name === "Thi") {
    return 'rgba(119,3,228,1)'
  } else if (name==='Duda') {
    return 'rgb(228,3,180)'
  } else {
    return 'none'
  }
}

const submitForm = async () => {
  if (message.value.text) {
    await messageStore.create(route.params.id, message.value.text);
    message.value.text = '';
  }
}
</script>

<style scoped>
.border-messages {
  margin-top: 1rem;

}
.messages {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  justify-content: flex-start;
  padding: 0 1rem;
  width: 100%;
}
.text {
  max-width: 11rem;
}
.messages div {
  width: 100%;
  display: flex;
  align-items: baseline;
  gap: .2rem;
}
.messages div .name {
  font-weight: bold;
}
.messages div .date {
  font-size: 10px;
  font-weight: bold;
  margin-left: auto;
  align-self: last baseline;
}
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
  padding: .5rem 1rem;
}

.submitBtn {
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

.submitBtn:hover {
  opacity: 1;
}

.submitBtn:active {
  top: 4px;
  box-shadow: #69148e 0px 3px 2px, #000 0px 3px 5px;
}
.loadMoreBtn {
  margin-top: 1rem;
  width: max-content;
  padding: .5rem 2rem
}
</style>