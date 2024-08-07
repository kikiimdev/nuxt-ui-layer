<script setup lang="ts">
import type { UiNav } from "../UiNavList.vue";
const props = defineProps<UiNav>();
</script>

<template>
  <button>
    <Icon :name="icon" class="w-6 h-6" />
    <span class="btm-nav-label">{{ text }}</span>
  </button>
</template>

<style></style>
