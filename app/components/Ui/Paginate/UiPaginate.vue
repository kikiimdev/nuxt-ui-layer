<script setup lang="ts">
const props = defineProps<{
  paginate: any;
}>();
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="text-sm">
      Total: <strong>{{ displayNumber(paginate.total) }}</strong>
    </div>
    <div class="join">
      <button
        class="join-item btn btn-sm bg-base-100"
        :disabled="paginate.disabledPrevButton"
        @click="paginate.prevPage()"
      >
        <Icon name="lucide:arrow-left" />
      </button>
      <button class="join-item btn btn-sm bg-base-100">
        Page {{ displayNumber(paginate.page) }} /
        {{ displayNumber(paginate.totalPage) }}
      </button>
      <button
        class="join-item btn btn-sm bg-base-100"
        :disabled="paginate.disabledNextButton"
        @click="paginate.nextPage()"
      >
        <Icon name="lucide:arrow-right" />
      </button>
    </div>
  </div>
</template>

<style></style>
