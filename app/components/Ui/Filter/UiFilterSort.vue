<script setup lang="ts">
const props = defineProps<{
  items: any;
}>();

const modelValue = defineModel<any>();
const direction = defineModel<"asc" | "desc">("direction", {
  required: false,
  default: "asc",
});
</script>

<template>
  <UiFilterSelect
    v-model="modelValue"
    :items
    label="Urutkan"
    :icon="
      direction === 'asc' ? 'lucide:arrow-down-a-z' : 'lucide:arrow-up-a-z'
    "
    remove-show-all
  >
    <template #list-prepend>
      <div class="join min-w-[162px]">
        <input
          type="radio"
          name="direction-buttons"
          class="btn btn-sm join-item"
          aria-label="Menurun"
          value="asc"
          v-model="direction"
        />
        <input
          type="radio"
          name="direction-buttons"
          class="btn btn-sm join-item"
          aria-label="Meningkat"
          value="desc"
          v-model="direction"
        />
      </div>
      <div class="divider -my-0" />
    </template>
  </UiFilterSelect>
</template>

<style></style>
