<script setup lang="ts">
export type UiFilterSelectItem = {
  label: string;
  value: any;
};

export type UiFilterBaseProps = {
  label: string;
  icon?: string;
};

const props = defineProps<
  UiFilterBaseProps & { activeLabel?: string | null }
>();

const detailsElement = ref<HTMLDetailsElement | null>(null);
const showDropdown = ref(false);

const toggleDropdown = () => {
  detailsElement.value!.open = !detailsElement.value!.open;
};

onMounted(() => {
  detailsElement.value?.addEventListener("toggle", (event) => {
    if (detailsElement.value?.open) {
      showDropdown.value = true;
    } else {
      showDropdown.value = false;
    }
  });
});
</script>

<template>
  <details ref="detailsElement" class="dropdown">
    <summary
      class="m-1 btn btn-sm border border-base-300"
      :class="[!!activeLabel ? 'btn-neutral' : 'bg-base-100']"
    >
      <Icon v-if="icon" :name="icon" class="sm:mx-0 sm:-mr-1" />
      <span class="hidden sm:block">
        {{ activeLabel || label }}
      </span>
      <Icon
        :name="showDropdown ? 'lucide:chevron-up' : 'lucide:chevron-down'"
        class="mx-1 sm:mx-0"
      />
    </summary>

    <div
      class="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow max-h-[50vh] flex-nowrap overflow-auto"
    >
      <slot :showDropdown :toggleDropdown />
    </div>
  </details>
</template>

<style></style>
