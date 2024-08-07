<script setup lang="ts">
import type { UiNav } from "../UiNavList.vue";
const props = defineProps<UiNav>();
const showDialog = ref(false);

const isActive = computed(() =>
  useRoute().matched.some((m) => m.path.startsWith(props.link))
);
</script>

<template>
  <button :class="[isActive && 'active']" @click="showDialog = true">
    <Icon :name="icon" class="w-6 h-6" />
    <span class="btm-nav-label">{{ text }}</span>
  </button>

  <UiDialog v-model="showDialog" closeOnClickOutside boxClass="w-screen">
    <ul class="menu bg-base-200 rounded-box">
      <li class="menu-title">{{ text }}</li>
      <li v-for="children in childrens" :key="children.link">
        <NuxtLink
          :to="children.link"
          :exact="children.exact"
          exact-active-class="active"
        >
          <Icon v-if="children.icon" :name="children.icon" />
          {{ children.text }}
        </NuxtLink>
      </li>
    </ul>
  </UiDialog>
</template>

<style></style>
