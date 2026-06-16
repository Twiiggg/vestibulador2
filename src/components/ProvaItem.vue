<script setup lang="ts">
    const props = defineProps({
        prova : Object
    })
</script>

<template>
    <h1>{{ prova.title || 'enem' }}</h1>
    <div v-for="language in prova.languages">
        <p> {{ language.label }}</p>
    </div>
</template>

<style scoped>

</style>