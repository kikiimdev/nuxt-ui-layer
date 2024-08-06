<script setup lang="ts">
const props = defineProps<{
  title?: string;
  text?: string;
}>();

const modelValue = defineModel<boolean | undefined>({
  required: true,
});

const toggleDialog = (isVisible?: boolean) => {
  const isBooleanValue = isVisible === true || isVisible === false;
  modelValue.value = isBooleanValue ? isVisible : !modelValue.value;
};
</script>

<template>
  <input v-model="modelValue" type="checkbox" class="modal-toggle" />

  <div class="modal modal-bottom sm:modal-middle" role="dialog">
    <div class="modal-box">
      <slot name="default" :toggle-dialog="toggleDialog">
        <header>
          <slot name="title" :toggle-dialog="toggleDialog">
            {{ title }}
          </slot>
        </header>

        <p class="py-4">
          <slot name="body" :toggle-dialog="toggleDialog">
            {{ text }}
          </slot>
        </p>

        <footer>
          <slot name="footer" :toggle-dialog="toggleDialog">
            <button class="btn" @click="toggleDialog(false)">Close</button>
          </slot>
        </footer>
      </slot>
    </div>
  </div>
</template>

<style lang="css" scoped>
article {
  @apply modal-box;
}

header {
  @apply font-bold text-sm flex justify-between items-center mb-6;
}

footer {
  @apply modal-action;
}
</style>
