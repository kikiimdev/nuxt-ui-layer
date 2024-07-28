<script setup lang="ts">
const modelValue = defineModel<any>();
const updateValue = (newValue: any) => {
  modelValue.value = newValue;
};

provide("activeTab", {
  activeTab: modelValue,
  changeTab: updateValue,
});
</script>

<template>
  <div class="flex">
    <div
      role="tablist"
      class="tabs tabs-boxed bg-base-300 border border-base-200 gap-1"
    >
      <slot />
    </div>
  </div>
</template>

<style></style>
