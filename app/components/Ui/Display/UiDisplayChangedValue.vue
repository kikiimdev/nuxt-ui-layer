<script setup lang="ts">
const props = defineProps<{
  value?: any;
  newValue?: any;
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
  <div :class="[isChanged && 'dropdown dropdown-hover']">
    <div tabindex="0" role="button" :class="[isChanged && 'underline']">
      {{ isChanged ? displayValue(newValue) : displayValue(value) }}
    </div>

    <UiCard
      no-padding
      tabindex="0"
      :class="[!isChanged && 'hidden']"
      class="dropdown-content card card-compact z-[1]"
    >
      <p class="p-2">
        {{ displayValue(newValue) }}
        <Icon name="lucide:chevron-right" />
        {{ displayValue(value) }}
      </p>
    </UiCard>
  </div>
</template>

<style></style>
