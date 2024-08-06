<script setup lang="ts">
const props = defineProps<{
  label?: string;
}>();

const modelValue = defineModel<any>();
</script>

<template>
  <label class="form-control w-full">
    <div class="label">
      <span class="label-text">{{ label }}</span>
      <!-- <span class="label-text-alt">Top Right label</span> -->
    </div>
    <input
      v-bind="$attrs"
      v-model="modelValue"
      class="input input-bordered w-full"
    />
    <!-- <div class="label">
      <span class="label-text-alt">Bottom Left label</span>
      <span class="label-text-alt">Bottom Right label</span>
    </div> -->
  </label>
</template>

<style></style>
