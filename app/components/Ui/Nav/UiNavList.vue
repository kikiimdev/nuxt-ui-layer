<script setup lang="ts">
export type UiNav = {
  text: string;
  icon: string;
  link: string;
  exact?: boolean;
  childrens?: UiNav[];
};
//
const props = defineProps<{
  navigations: UiNav[];
}>();
</script>

<template>
  <ul class="menu px-0 py-4">
    <UiNavListItem v-for="nav in navigations" :key="nav.link" v-bind="nav" />
  </ul>
</template>

<style></style>
