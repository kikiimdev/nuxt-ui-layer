<script setup lang="ts">
import type { UiNav } from "./UiNavList.vue";

const props = defineProps<UiNav>();
</script>

<template>
  <li>
    <UiNavListGroup v-if="props.childrens?.length" v-bind="props" />
    <NuxtLink
      v-else
      :to="link"
      :exact="exact"
      exact-active-class="active hover:!opacity-80"
    >
      <Icon :name="icon" />
      {{ text }}
    </NuxtLink>
  </li>
</template>

<style></style>
