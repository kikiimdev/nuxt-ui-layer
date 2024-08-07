<script setup lang="ts">
const props = defineProps<{
  title?: string | number;
  subtitle?: string | number;
}>();
</script>

<template>
  <div class="flex flex-col gap-1">
    <p>
      <slot name="title">
        {{ title }}
      </slot>
    </p>
    <p class="text-xs text-opacity-50">
      <slot name="subtitle">
        {{ subtitle }}
      </slot>
    </p>
  </div>
</template>

<style></style>
