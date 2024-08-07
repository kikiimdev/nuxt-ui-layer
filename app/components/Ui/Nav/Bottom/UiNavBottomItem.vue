<script setup lang="ts">
import type { UiNav } from "../UiNavList.vue";
const props = defineProps<UiNav>();
</script>

<template>
  <NuxtLink :to="link" :exact="exact" exact-active-class="active">
    <Icon :name="icon" class="w-6 h-6" />
    <span class="btm-nav-label">{{ text }}</span>
  </NuxtLink>
</template>

<style></style>
