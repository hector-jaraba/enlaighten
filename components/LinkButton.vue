<template>
  <a class="btn" :class="btnType" :href="href">
    <slot />
  </a>
</template>

<script lang="ts">
enum BTN_TYPE {
  NORMAL = "normal",
  OUTLINE = "outline",
  BIG_ACTION = "big-action",
}
</script>

<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  type: {
    type: String as PropType<BTN_TYPE>,
    default: BTN_TYPE.NORMAL,
  },
  href: {
    type: String,
    required: true,
  },
});

const btnType = computed(() => `btn-${props.type}`);
</script>

<style lang="postcss" scoped>
.btn {
  @apply relative py-2 px-8 rounded-3xl text-lg text-center cursor-pointer block overflow-hidden;
  min-width: 200px;
}

.btn-normal {
  @apply text-background bg-dark;
  transition: 0.2s ease;

  @media (hover: hover) {
    &:hover {
      @apply bg-primary font-extrabold;
    }
  }
}

.btn-outline {
  @apply text-dark border-2 border-dark;
  transition: 0.2s ease;
  @media (hover: hover) {
    &:hover {
      @apply font-extrabold text-background bg-primary;
    }
  }
}

.btn-big-action {
  @apply py-4 px-14 text-xl bg-primary text-background rounded-full  font-extrabold;
  transition: 0.3s linear;
  border: 2px solid transparent;

  @media (hover: hover) {
    &:hover {
      @apply font-extrabold text-dark bg-transparent border-2 border-dark;
    }
  }

  @media (min-width: 1024px) {
    @apply py-5 px-7 text-2xl;
  }

  @media (min-width: 1280px) {
    @apply py-7 px-28 text-4xl;
  }
}
</style>
