<template>
  <div class="fixed top-0 bg-white text-black p-16 w-screen min-h-screen z-50">
    <button
      class="absolute right-0 top-0 mt-9 mr-9"
      @click="handleClose"
      aria-label="close menu"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <ul class="text-2xl">
      <li class="mx-4 my-8">
        <a @click="handleClose" href="/">{{ $t("menu_home_label") }}</a>
      </li>
      <li class="mx-4 my-8">
        <a @click="handleClose" href="#about">{{ $t("menu_about_label") }}</a>
      </li>
      <li class="mx-4 my-8">
        <a @click="handleClose" href="#services">
          {{ $t("menu_services_label") }}
        </a>
      </li>
      <li class="mx-4 my-8">
        <a @click="handleClose" href="#team">
          {{ $t("menu_team_label") }}
        </a>
      </li>
      <li class="mx-4 my-8">
        <a @click="handleClose" href="#contact">
          {{ $t("menu_contact_label") }}
        </a>
      </li>
    </ul>
    <LanguageSelector class="mt-12 ml-8" />
  </div>
</template>

<script setup>
const emit = defineEmits(["mobileMenu"]);

const handleClose = () => {
  emit("mobileMenu", false);
};
</script>

<style lang="postcss" scoped>
a {
  @apply px-5 pt-5;
  &:hover {
    @apply text-primary;
  }
}
</style>
