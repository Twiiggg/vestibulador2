<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/prova">prova</RouterLink>
    <RouterLink to="/provaRequest">provaRequest</RouterLink>
    <RouterLink to="/provaList">provaList</RouterLink>
    <RouterLink to="/history">history

    </RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  background-color: #300000;
  width: fit-content;
  font-size: 12px;
  text-align: center;
  /* height: 100vh; */
  position: sticky;
  top: 0px;
}

nav a.router-link-exact-active {
  color: var(--c-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 1rem 1rem;
  border-left: 1px solid var(--c-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
