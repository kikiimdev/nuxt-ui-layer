<script setup lang="ts">
const { myLayer } = useAppConfig();
</script>

<template>
  <div>
    <h1>Hello Worldz!</h1>
    <button class="btn">{{ myLayer }}</button>
  </div>
</template>
