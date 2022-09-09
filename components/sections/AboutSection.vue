<template>
  <section id="about" class="bg-backgroundDark lg:min-h-screen">
    <div class="w-full gardient h-20 md:h-28"></div>
    <BaseContainer class="flex flex-col pt-4 md:pt-20 md:pb-24 lg:flex-row">
      <div class="lg:w-1/2 relative">
        <h2 class="title-strong mb-10" v-html="$t('about_page_title')" />
        <LottieAnimation
          class="animation"
          :animationData="animation"
          loop
          autoPlay
        />
      </div>

      <div class="description" v-html="$t('about_description_text')"></div>
    </BaseContainer>
  </section>
</template>

<script lang="ts" setup>
import animation from "@/assets/animation.json";
</script>

<style lang="postcss" scoped>
.gardient {
  background: linear-gradient(180deg, #ffff 0%, #f5f5f5 50%);
  mix-blend-mode: normal;
}

.description {
  @apply text-xl mt-20 lg:text-2xl font-light text-gray lg:w-1/2 lg:mt-4;
  line-height: 1.8em;
}

.description a {
  @apply text-primary;
}

.animation {
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 350px;
    margin-left: 75px;
    margin-top: 150px;
  }
}
</style>
