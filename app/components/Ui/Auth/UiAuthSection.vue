<script setup lang="ts">
type Form = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
};

const props = defineProps<{
  forms?: Form[];
  onSubmit?: (data: any) => void;
}>();

const modelValue = defineModel<any>({});
</script>

<template>
  <div>
    <form
      class="flex flex-col gap-4 rounded-box sm:bg-base-200 p-6"
      @submit.prevent="(e) => onSubmit?.(modelValue)"
    >
      <h1 class="text-3xl font-bold self-center">Log in</h1>

      <!-- <span class="self-center">
        Don't have an account?
        <a class="link link-secondary">Register</a>
      </span>

      <a class="btn btn-neutral">
        <i class="fa-brands fa-google text-primary"></i>
        <Icon name="logos:google-icon" />
        Log in with Google
      </a>

      <div class="divider">OR</div> -->

      <label
        v-for="form in forms"
        :key="form.name"
        :for="form.name"
        class="form-control"
      >
        <div class="label">
          <span class="label-text">{{ form.label }}</span>
        </div>

        <input
          :id="form.name"
          :name="form.name"
          :type="form.type ?? 'text'"
          :placeholder="form.placeholder"
          class="input input-bordered"
          v-model="modelValue[form.name]"
        />
      </label>

      <!-- <label class="form-control">
      <div class="label">
        <span class="label-text">Email</span>
      </div>

      <input class="input input-bordered" />
    </label>

    <label class="form-control">
      <div class="label">
        <span class="label-text">Password</span>
        <a class="label-text link link-accent">Forgot password?</a>
      </div>

      <input type="password" class="input input-bordered" />
    </label> -->

      <div class="form-control">
        <label class="cursor-pointer label self-start gap-2">
          <input type="checkbox" class="checkbox" />
          <span class="label-text">Remember me</span>
        </label>
      </div>

      <slot name="actions" />
    </form>
  </div>
</template>

<style></style>
