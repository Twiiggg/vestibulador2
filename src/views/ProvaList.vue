<script setup lang="ts">
import ProvaItem from '@/components/ProvaItem.vue';
import { ref } from 'vue';

let provas = ref([])
let localProvas = localStorage.getItem("provas")
if(localProvas){ provas.value = JSON.parse(localProvas) }

console.log('fetching')
fetch('https://api.enem.dev/v1/exams', {method: 'GET'})
  .then(res => res.json())
  .then(res => {
    console.log('prova got')
    provas.value = res
    localStorage.setItem("provas", JSON.stringify(res))
  })
  .catch(err => {
    console.log(err)
  });

</script>

<template>
<div class="provas" v-if="provas">
    <div class="prova" v-for="prova in provas">
        <ProvaItem :prova="prova" />
    </div>
</div>
</template>

<style scoped>
    .provas{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        height: fit-content;
    }
    .prova{
        margin: 1rem;
        background-color: var(--c-bg-mute);
        padding: 1rem;
        border-radius: 1rem ;
        height: fit-content;
    }
</style>