<template>
  <nav class="flex items-center justify-between flex-wrap w-full">
    <div class="flex items-center flex-shrink-0 text-white">
      <figure class="flex items-center flex-shrink-0 w-60 md:w-72 lg:w-80">
        <a href="/" class="w-full">
          <img class="min-w-full" src="/img/Logo.svg" alt="Logo" />
        </a>
      </figure>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 rounded"
        @click="handleMobileMenu"
      >
        <svg
          class="fill-current h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex items-center">
      <ul class="p-0 text-base h-auto relative flex items-center w-auto">
        <li class="mx-4 my-8">
          <a href="/">{{ $t("menu_home_label") }}</a>
        </li>
        <li class="mx-4 my-8">
          <a href="#about">{{ $t("menu_about_label") }}</a>
        </li>
        <li class="mx-4 my-8">
          <a href="#services">{{ $t("menu_services_label") }}</a>
        </li>
        <li class="mx-4 my-8">
          <a href="#team">{{ $t("menu_team_label") }}</a>
        </li>
        <li class="mx-4 my-8">
          <a href="#contact">{{ $t("menu_contact_label") }}</a>
        </li>
      </ul>
      <LanguageSelector class="hidden ml-6 lg:flex" />
    </div>
  </nav>
</template>

<script lang="ts" setup>
const emit = defineEmits(["mobileMenu"]);
const handleMobileMenu = () => {
  emit("mobileMenu", true);
};
</script>

<style lang="postcss" scoped>
a {
  &:hover {
    @apply text-primary;
  }
}
</style>
