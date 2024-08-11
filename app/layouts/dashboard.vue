<script setup lang="ts">
// import { Toaster } from "vue-sonner";
import type { UiNav } from "../components/Ui/Nav/UiNavList.vue";

const props = defineProps<{
  navigations: UiNav[];
}>();

// const navigations = [
//   {
//     text: "Dashboard",
//     icon: "lucide:home",
//     link: "/app",
//     exact: true,
//   },
//   {
//     text: "User",
//     icon: "lucide:user",
//     link: "/app/user",
//     exact: false,
//   },
// ];
</script>

<template>
  <div>
    <div
      class="flex min-h-screen bg-base-200 overflow-x-hidden sm:overflow-x-clip"
    >
      <aside
        class="hidden sm:flex h-screen sticky top-0 flex-col overflow-y-auto border-r-[1px] border-base-300 bg-base-100 w-72 sm:flex-shrink-0"
      >
        <!-- Header -->
        <slot name="header">
          <div class="flex justify-between p-2">
            <!-- Logo -->
            <a class="btn btn-ghost text-lg">
              <img alt="Logo" src="/logo.svg" class="h-4" />
            </a>

            <a class="btn btn-ghost btn-circle text-lg">
              <Icon name="lucide:settings" />
            </a>
          </div>
        </slot>

        <!-- Body -->
        <div class="flex flex-col border-t border-base-300 px-6 pt-4">
          <slot name="body-prepend">
            <!-- Search input -->
            <input class="input input-bordered" placeholder="Search..." />
          </slot>

          <!-- Links -->
          <div
            class="flex flex-grow flex-col divide-y divide-base-300 w-full h-full"
          >
            <UiNavList :navigations />
          </div>
        </div>

        <div class="flex flex-1"></div>

        <!-- Footer -->
        <div
          class="flex flex-grow-0 justify-between items-center p-2 gap-4 border-t border-base-300"
        >
          <slot name="footer">
            <a class="btn">
              <img
                alt="Profile"
                src="https://i.pravatar.cc/150?img=11"
                class="w-8 rounded-full"
              />

              <div class="flex flex-col text-start">
                <span class="font-bold">User name</span>
                <span class="text-sm text-accent">user@email.com</span>
              </div>
            </a>

            <NuxtLink class="btn btn-secondary btn-sm mr-3" title="Logout">
              <Icon name="lucide:door-open" />
            </NuxtLink>
          </slot>
        </div>
      </aside>

      <div id="layout-start" class="flex flex-col grow p-6">
        <slot />
      </div>
    </div>

    <!-- <Toaster closeButton position="top-right" /> -->
  </div>
</template>

<style></style>
