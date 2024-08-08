<script setup lang="ts">
type Action = {
  attrs?: any;
  onClick?: () => void;
  loading?: boolean;
  text?: string;
  // showLoading?: boolean;
};

type UiDialogActionsProps = {
  actions: Action[];
};
const props = defineProps<UiDialogActionsProps>();
</script>

<template>
  <div class="flex flex-row-reverse gap-3">
    <button
      v-for="(a, i) in props.actions"
      :key="i"
      v-bind="a.attrs"
      type="submit"
      :class="['btn', a.attrs?.class, a.loading && 'pointer-events-none']"
      @click.prevent="() => a?.onClick?.()"
    >
      <span v-if="a.loading" class="loading loading-spinner"></span>
      {{ a.text }}
    </button>
    <!-- <button
      type="submit"
      class="btn btn-primary"
      :class="[c.editForm.processing && 'pointer-events-none']"
      @click.prevent="() => c.submitEditForm()"
    >
      <span v-if="c.editForm.processing" class="loading loading-spinner"></span>
      Simpan
    </button>
    <button
      :disabled="c.editForm.processing"
      class="btn"
      @click.prevent="() => toggleDialog()"
    >
      Tutup
    </button> -->
  </div>
</template>

<style></style>
