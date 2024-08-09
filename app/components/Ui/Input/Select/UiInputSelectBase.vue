<script setup lang="ts">
export type UiInputSelectItem = {
  label: string;
  value: any;
};

export type UiInputSelectBaseProps = {
  label?: string;
  icon?: string;
  inputClass?: string;
};

const props = defineProps<
  UiInputSelectBaseProps & { activeLabel?: string | null }
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
  <label class="form-control w-full">
    <div class="label">
      <span class="label-text">{{ label }}</span>
      <!-- <span class="label-text-alt">Top Right label</span> -->
    </div>
    <details ref="detailsElement" class="dropdown">
      <summary
        class="mb-1 input input-bordered flex items-center gap-2 w-full"
        :class="[inputClass]"
      >
        <Icon v-if="icon" :name="icon" class="mx-1 sm:mx-0 sm:-mr-1" />
        <span class="flex-auto" :class="[!activeLabel ? 'opacity-50' : '']">
          {{ activeLabel || label }}
        </span>
        <Icon
          :name="showDropdown ? 'lucide:chevron-up' : 'lucide:chevron-down'"
          class="mx-1 sm:mx-0"
        />
      </summary>

      <div
        class="menu dropdown-content dropdown-top bg-base-100 rounded-box z-[1] p-2 shadow max-h-[50vh] flex-nowrap overflow-auto"
      >
        <slot :showDropdown :toggleDropdown />
      </div>
    </details>
  </label>
</template>

<style></style>
