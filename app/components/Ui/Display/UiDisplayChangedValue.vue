<script setup lang="ts">
const props = defineProps<{
  value?: any;
  newValue?: any;
  dropdownClass?: string;
}>();

const isChanged = computed(
  () => props.newValue !== undefined && props.value !== props.newValue
);

const displayValue = (value: any) => {
  if (value === null) return "-";

  return value;
};
</script>

<template>
  <div
    :class="[
      isChanged && 'dropdown dropdown-hover',
      isChanged && dropdownClass,
    ]"
  >
    <div
      tabindex="0"
      :role="isChanged ? 'button' : 'text'"
      :class="[isChanged && 'underline']"
      class="opacity-100"
    >
      {{ isChanged ? displayValue(newValue) : displayValue(value) }}
    </div>

    <UiCard
      no-padding
      tabindex="0"
      :class="[!isChanged && 'hidden']"
      class="dropdown-content card card-compact z-[1] opacity-100"
    >
      <p class="flex flex-nowrap items-center gap-2">
        {{ displayValue(value) }}
        <Icon name="lucide:chevron-right" />
        {{ displayValue(newValue) }}
      </p>
    </UiCard>
  </div>
</template>

<style></style>
