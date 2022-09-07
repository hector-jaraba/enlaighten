<template>
  <header>
    <MainMenu @mobile-menu="handleMobileMenu" />
  </header>
</template>

<script lang="ts" setup>
const emit = defineEmits(["mobileMenu"]);

const handleMobileMenu = (isOpen: boolean) => {
  emit("mobileMenu", isOpen);
};
</script>
