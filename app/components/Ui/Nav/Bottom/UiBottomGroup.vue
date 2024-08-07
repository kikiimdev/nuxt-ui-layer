<script setup lang="ts">
import type { UiNav } from "../UiNavList.vue";
const props = defineProps<UiNav>();
const showDialog = ref(false);
</script>

<template>
  <button @click="showDialog = true">
    <Icon :name="icon" class="w-6 h-6" />
    <span class="btm-nav-label">{{ text }}</span>
  </button>

  <UiDialog v-model="showDialog">
    <ul>
      <li v-for="children in childrens" :key="children.link">
        <NuxtLink
          :to="children.link"
          :exact="children.exact"
          exact-active-class="active"
        >
          {{ children.text }}
        </NuxtLink>
      </li>
    </ul>
  </UiDialog>
</template>

<style></style>
