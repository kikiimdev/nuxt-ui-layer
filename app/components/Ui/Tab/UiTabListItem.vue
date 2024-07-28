<script setup lang="ts">
const props = defineProps<{
  value?: any;
}>();

const { activeTab, changeTab } = inject("activeTab") as any;

const isActiveTab = computed(
  () => !!props.value && props.value == unref(activeTab)
);
</script>

<template>
  <a
    role="tab"
    class="tab"
    :class="[isActiveTab ? '!bg-base-100 font-medium' : 'text-base-content/65']"
    @click="() => !!value && changeTab(value)"
  >
    <slot />
  </a>
</template>

<style></style>
