<script setup lang="ts">
export type UiTableHeader = {
  key: string;
  name?: string;

  thClass?: string;
  tdClass?: string;
};

const props = defineProps<{
  headers: UiTableHeader[];
  items: any[];
}>();

const getItemValue = ({
  header,
  item,
}: {
  header: UiTableHeader;
  item: any;
}) => {
  const keys = header.key.split(".");
  let value = item;
  for (const key of keys) {
    if (value === undefined) {
      return undefined;
    }
    if (typeof value !== "object") {
      return undefined;
    }

    if (!value?.hasOwnProperty(key)) {
      return undefined;
    }

    value = value[key];
  }

  return value;
};
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <!-- <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th> -->
          <th
            v-for="header in headers"
            :key="header.key"
            :class="[header?.thClass]"
          >
            <slot :name="`header.${header.key}`" :header>
              {{ header.name }}
            </slot>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="!items.length" class="text-center opacity-50">
          <td class="py-10" :colspan="headers.length">Data tidak ditemukan</td>
        </tr>
        <tr v-for="(item, index) in items" :key="index">
          <!-- <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th> -->
          <td
            v-for="header in headers"
            :key="header.key"
            class="whitespace-nowrap"
            :class="[header.tdClass]"
          >
            <slot
              :name="`item.${header.key}`"
              :header
              :item
              :value="getItemValue({ header, item })"
            >
              {{ getItemValue({ header, item }) }}
            </slot>
          </td>
        </tr>

        <!-- <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">Hart Hagerty</div>
                <div class="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>
            Zemlak, Daniel and Leannon
            <br />
            <span class="badge badge-ghost badge-sm"
              >Desktop Support Technician</span
            >
          </td>
          <td>Purple</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>

        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">Brice Swyre</div>
                <div class="text-sm opacity-50">China</div>
              </div>
            </div>
          </td>
          <td>
            Carroll Group
            <br />
            <span class="badge badge-ghost badge-sm">Tax Accountant</span>
          </td>
          <td>Red</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>

        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">Marjy Ferencz</div>
                <div class="text-sm opacity-50">Russia</div>
              </div>
            </div>
          </td>
          <td>
            Rowe-Schoen
            <br />
            <span class="badge badge-ghost badge-sm">Office Assistant I</span>
          </td>
          <td>Crimson</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>

        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">Yancy Tear</div>
                <div class="text-sm opacity-50">Brazil</div>
              </div>
            </div>
          </td>
          <td>
            Wyman-Ledner
            <br />
            <span class="badge badge-ghost badge-sm"
              >Community Outreach Specialist</span
            >
          </td>
          <td>Indigo</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr> -->
      </tbody>

      <!-- foot -->
      <tfoot v-if="$slots.tfoot">
        <slot name="tfoot" />
      </tfoot>
    </table>
  </div>
</template>

<style></style>
