<template>
  <section class="w-screen h-screen relative">
    <BaseContainer>
      <div class="mt-20 md:mt-28 w-full sm:w-title">
        <h1 class="hero-title-strong" v-html="$t('hero_slogan_label')"></h1>
        <h3 class="text-2xl text-gray font-light ml-1 mt-4">
          {{ $t("hero_subtitle_label") }}
        </h3>
        <div class="flex flex-col mt-8 sm:flex-row">
          <LinkButton
            href="#about"
            :type="outline"
            v-text="$t('hero_discoverMore_btn')"
          />
          <LinkButton
            href="#contact"
            class="mt-4 sm:ml-8 sm:mt-0"
            v-text="$t('hero_contactUs_btn')"
          />
        </div>
      </div>
    </BaseContainer>

    <WavesAnimation class="absolute top-0 -z-10 md:z-0" :top="250" />
  </section>
</template>

<script lang="ts" setup>
import { BTN_TYPE } from "@/types";
const outline = "outline" as BTN_TYPE.OUTLINE;
</script>
