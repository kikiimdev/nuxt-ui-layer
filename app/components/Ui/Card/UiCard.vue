<script setup lang="ts">
const props = defineProps<{
  title?: string;
  subtitle?: string;
  noPadding?: boolean;
}>();
</script>

<template>
  <div class="card bg-base-100 border border-base-300">
    <div class="card-body" :class="[noPadding ? 'p-0' : 'p-6']">
      <h2 v-if="title" class="card-title text-2xl">
        <slot name="title">
          {{ title }}
        </slot>
      </h2>

      <div class="text-sm">
        <slot name="default">
          {{ subtitle }}
        </slot>
      </div>

      <slot name="footer">
        <div v-if="$slots['actions']" class="card-actions justify-start mt-2">
          <slot name="actions" />
        </div>
      </slot>
    </div>
  </div>
</template>

<style></style>
