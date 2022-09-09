<template>
  <ul class="flex">
    <li :class="{ active: locale === 'en' }">
      <button
        @click.stop="handleChangeLanguage('en')"
        aria-label="change web to english"
      >
        EN
      </button>
    </li>
    <div class="px-2">|</div>
    <li :class="{ active: locale === 'nl' }">
      <button
        @click.stop="handleChangeLanguage('nl')"
        aria-label="change web to dutch"
      >
        NL
      </button>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const handleChangeLanguage = (lang: string) => {
  console.log("change");
  locale.value = lang;
};
</script>
<style lang="postcss" scoped>
.active {
  @apply font-bold;
}
</style>
