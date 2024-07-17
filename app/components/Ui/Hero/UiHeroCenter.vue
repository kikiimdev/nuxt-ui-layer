<script setup lang="ts">
const props = defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <!-- <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 v-if="title" class="text-5xl font-bold">{{ title }}</h1>
        <p v-if="subtitle" class="py-6">
          {{ subtitle }}
        </p>
        <slot name="actions">
          <button class="btn btn-primary">Get Started</button>
        </slot>
      </div>
    </div>
  </div> -->
  <div class="hero min-h-screen">
    <div class="flex justify-center px-6">
      <div class="flex flex-col items-center text-center gap-6 max-w-xl">
        <span class="text-sm text-accent">App Name: The future of the web</span>

        <h1 class="text-5xl font-bold">{{ title }}</h1>

        <span class="">
          {{ subtitle }}
        </span>

        <div class="flex gap-4">
          <slot name="actions"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
