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
  <div :class="[isChanged && `dropdown dropdown-hover ${dropdownClass}`]">
    <div tabindex="0" role="button" :class="[isChanged && 'underline']">
      {{ isChanged ? displayValue(newValue) : displayValue(value) }}
    </div>

    <UiCard
      no-padding
      tabindex="0"
      :class="[!isChanged && 'hidden']"
      class="dropdown-content card card-compact z-[1]"
    >
      <p>
        {{ displayValue(newValue) }}
        <Icon name="lucide:chevron-right" />
        {{ displayValue(value) }}
      </p>
    </UiCard>
  </div>
</template>

<style></style>
