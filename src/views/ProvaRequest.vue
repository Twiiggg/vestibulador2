<script setup lang="ts">
    import { ref } from 'vue'
    let year = ref()
    let language = ref()
    let firstQuestion = ref()
    let questionCount = ref()

    function getProva() {

        fetch(`https://api.enem.dev/v1/exams/${year.value}/questions?limit=${questionCount.value - 1}&offset=${firstQuestion.value}&language=${language.value}`, {method: 'GET'})
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }
</script>

<template>
<main class="c ">
        <form class="c " action="" method="get" @submit.prevent="getProva">
            <input type="text" name="year" v-model="year" placeholder="Ano da prova">
            <fieldset class="c ">
                    <label>
                        <input type="radio" name="language" value="ingles" v-model="language">
                        <span>Inglês</span>
                    </label>
                    <label>
                        <input type="radio" name="language" value="espanhol" v-model="language">
                        <span>Espanhol</span>
                    </label>
            </fieldset>
            <input type="text" name="first-question" v-model="firstQuestion" placeholder="1º questão">
            <input type="text" name="question-count" v-model="questionCount" placeholder="# de questões">
            <input type="submit" value="submit">
        </form>
</main>
</template>

<style scoped>

main{
    height: 100%;

}
form {
    
    flex-direction: column;
    align-content: safe;
}
fieldset{
    flex-direction: row;
    width: 100%;
    border: none;
}

/* fieldset input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
} */

label{
    background-color: var(--c-bg-mute);
    margin: 0.5rem;
    padding: 0.25rem;
    border-radius: 0.5rem;
}
span{
  padding: 0.5rem;
  border: none;
  margin: 0.25rem;
  border-radius: 0.75rem;
}
input{
    background-color: var(--c-bg-mute);
    color: var(--c-text);
}

</style>