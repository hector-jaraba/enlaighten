<template>
  <main>
    <Transition>
      <MobileMenu v-if="isMobileMenuOpen" @mobileMenu="handleMobileMenu" />
    </Transition>
    <BaseContainer>
      <BaseHeader @mobileMenu="handleMobileMenu" />
    </BaseContainer>

    <slot />
  </main>
</template>

<script lang="ts" setup>
const isMobileMenuOpen = ref(false);
const handleMobileMenu = (isOpen: boolean) => {
  isMobileMenuOpen.value = isOpen;
};
</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: 0.3s ease;
  opacity: 1;
  left: 0;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  left: -200px;
}
</style>
