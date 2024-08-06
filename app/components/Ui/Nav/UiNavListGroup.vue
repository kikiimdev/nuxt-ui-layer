<script setup lang="ts">
import type { UiNav } from "./UiNavList.vue";

const props = defineProps<UiNav>();
const showDropdown = useState(`show-dropdown-${props.link}`, () => false);

const isOnRoute = computed(() =>
  useRoute().matched.some((m) => m.path.startsWith(props.link)),
);

const isActive = computed(() => isOnRoute.value || showDropdown.value);

onMounted(() => {
  if (isOnRoute.value) showDropdown.value = true;
});
</script>

<template>
  <span
    class="menu-dropdown-toggle cursor-pointer"
    :class="[
      isActive && 'hover:!opacity-80',
      showDropdown && 'menu-dropdown-show',
    ]"
    @click="showDropdown = !showDropdown"
  >
    <Icon :name="icon" />
    {{ text }}
  </span>

  <ul class="menu-dropdown" :class="[showDropdown && 'menu-dropdown-show']">
    <UiNavListItem
      v-for="nav in props.childrens"
      :key="nav.link"
      v-bind="nav"
    />
  </ul>
</template>

<style></style>
