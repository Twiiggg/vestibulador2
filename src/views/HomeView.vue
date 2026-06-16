<script setup lang="ts">
import { useCounterStore } from '@/stores/counter.ts';

const count = useCounterStore()
</script>

<template>
  <main>
    <h1>{{ count.count }}</h1>
  </main>
</template>
