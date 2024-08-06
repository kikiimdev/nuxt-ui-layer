<script setup lang="ts">
const props = defineProps<{
  title?: string | number;
  subtitle?: string | number;
}>();
</script>

<template>
  <div class="flex flex-col gap-1">
    <p>{{ title }}</p>
    <p class="text-xs opacity-50">
      {{ subtitle }}
    </p>
  </div>
</template>

<style></style>
