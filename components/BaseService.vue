<template>
  <article class="base-service">
    <figure>
      <img
        class="mx-auto"
        :src="`/icons/${service.icon}.svg`"
        :alt="service.alt"
      />
    </figure>
    <h3 class="text-2xl font-extrabold text-center mt-6 mb-9">
      {{ service.title }}
    </h3>
    <div class="text-gray font-light">
      <p v-for="paragraph in service.description" v-text="paragraph" />
    </div>
  </article>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ServiceItem } from "@/types";

const props = defineProps({
  service: {
    type: Object as PropType<ServiceItem>,
    required: true,
  },
});
</script>

<style lang="postcss" scoped>
.base-service {
  @apply list-none bg-white pt-11 pb-8 px-8 rounded-md;
  filter: drop-shadow(7px 4px 70px rgba(0, 0, 0, 0.15));
}
</style>
