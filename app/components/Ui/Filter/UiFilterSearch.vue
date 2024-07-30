<script setup lang="ts">
import type { UiFilterBaseProps } from "./UiFilterBase.vue";

export type UiFilterSearchProps = UiFilterBaseProps & {
  loading?: boolean;
  placeholder?: string;
};
const props = defineProps<UiFilterSearchProps>();

const modelValue = defineModel<any>();

const handleInput = (event: any) => {
  modelValue.value = event.target.value;
};
</script>

<template>
  <UiFilterBase
    :active-label="modelValue"
    v-bind="props"
    #default="{ showDropdown, toggleDropdown }"
  >
    <div class="p-1">
      <input
        :autofocus="showDropdown"
        class="input input-sm input-bordered min-w-24"
        type="search"
        :placeholder="placeholder ?? 'Search...'"
        :value="modelValue"
        @input="handleInput"
        @keyup.enter="toggleDropdown"
      />
    </div>
  </UiFilterBase>
</template>

<style></style>
