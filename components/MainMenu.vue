<template>
  <nav class="flex items-center justify-between flex-wrap w-full">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <figure class="flex items-center flex-shrink-0 w-48 sm:w-auto">
        <a href="/">
          <img class="" src="/img/Logo.svg" alt="Logo" />
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
    <ul
      class="fixed hidden top-0 left-0 h-screen py-40 w-full text-4xl pl-7 lg:p-0 lg:text-base lg:h-auto lg:relative lg:flex lg:items-center lg:w-auto"
    >
      <li class="mx-4 my-8">
        <a href="/">Home</a>
      </li>
      <li class="mx-4 my-8">
        <a href="#about">About us</a>
      </li>
      <li class="mx-4 my-8">
        <a href="#services">Services</a>
      </li>
      <li class="mx-4 my-8">
        <a href="#team">Team</a>
      </li>
      <li class="mx-4 my-8">
        <a href="#contact">Contact</a>
      </li>
    </ul>
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
