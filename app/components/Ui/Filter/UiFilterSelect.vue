<script setup lang="ts">
import { useInfiniteScroll, useElementVisibility } from "@vueuse/core";
import type { UiFilterBaseProps, UiFilterSelectItem } from "./UiFilterBase.vue";

export type UiFilterSelectProps = UiFilterBaseProps & {
  onLoadMore?: () => void;
  onChange?: (value: any) => void;
  items: UiFilterSelectItem[];
  loading?: boolean;
  removeShowAllOptions?: boolean;
};
const props = defineProps<UiFilterSelectProps>();

const _items = computed(() => {
  if (props.removeShowAllOptions) return props.items;

  return [
    {
      label: "Semua",
      value: null,
    },
    ...props.items,
  ];
});

const handleChange = (newValue: any) => {
  if (props.onChange) props.onChange(newValue);
  modelValue.value = newValue;
};

const modelValue = defineModel<any>();
const search = defineModel("search", {
  required: false,
});

const selectedItem = computed(() => {
  return props.items.find((item) => item.value === modelValue.value);
});

const checkIsSelected = (v: any) => {
  return modelValue.value === v;
};

const endOfListElement = ref<HTMLElement | null>(null);
const targetIsVisible = useElementVisibility(endOfListElement);
const listElement = ref<HTMLElement | null>(null);

useInfiniteScroll(
  listElement,
  () => {
    if (targetIsVisible.value && !props.loading) props.onLoadMore?.();
  },
  {
    distance: 10,
  }
);
</script>

<template>
  <UiFilterBase
    :active-label="selectedItem?.label"
    v-bind="props"
    #default="{ showDropdown, toggleDropdown }"
  >
    <slot name="list-prepend">
      <label
        v-if="search !== undefined"
        class="input input-sm input-bordered flex items-center gap-2 mb-2"
      >
        <input type="text" class="grow" placeholder="Search" v-model="search" />
        <Icon name="lucide:search" />
      </label>
    </slot>

    <ul ref="listElement" class="">
      <li v-for="item in _items" :key="item.value">
        <a
          class="flex whitespace-nowrap justify-between"
          :class="[checkIsSelected(item.value) && 'bg-base-200']"
          @click="
            () => {
              handleChange(item.value);
              toggleDropdown();
            }
          "
        >
          {{ item.label }}
          <Icon
            v-if="checkIsSelected(item.value)"
            name="lucide:check"
            class="text-primary"
          />
        </a>
      </li>

      <div
        v-if="!!onLoadMore"
        ref="endOfListElement"
        class="justify-end text-center"
      >
        <div class="divider m-0" />
        <span v-if="loading" class="loading loading-dots loading-md"></span>
        <!-- <span v-else>-</span> -->
      </div>

      <slot name="list-append" />
    </ul>
  </UiFilterBase>
</template>

<style></style>
