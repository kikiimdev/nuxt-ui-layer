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

    <div
      tabindex="0"
      :class="[!isChanged && 'hidden']"
      class="dropdown-content card card-compact z-[1] p-2 shadow"
    >
      <div class="card-body">
        <p>
          {{ displayValue(newValue) }}
          <Icon name="lucide:chevron-right" />
          {{ displayValue(value) }}
        </p>
      </div>
    </div>
  </div>

  <!-- <div class="dropdown">
  <div tabindex="0" role="button" class="btn m-1">Click</div>
  <div
    tabindex="0"
    class="dropdown-content card card-compact bg-primary text-primary-content z-[1] w-64 p-2 shadow">
    <div class="card-body">
      <h3 class="card-title">Card title!</h3>
      <p>you can use any element as a dropdown.</p>
    </div>
  </div>
</div> -->
</template>

<style></style>
