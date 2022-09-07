<template>
  <section id="about" class="bg-backgroundDark lg:min-h-screen">
    <div class="w-full gardient h-28"></div>
    <BaseContainer class="flex flex-col pt-20 pb-24 lg:flex-row">
      <div class="lg:w-1/2 relative">
        <h1 class="title-strong mb-10">
          Our <span class="text-primary">goal</span>
        </h1>
        <LottieAnimation
          class="animation"
          :animationData="animation"
          loop
          autoPlay
        />
      </div>

      <div class="description">
        <p>
          Digitilisation is rapidly transforming our society and businesses into
          a data-driven enterprise.
        </p>
        <p>
          Unlocking the potential of these vast quantities of collected data is
          creating exciting new opportunities. But it is also poses new
          challenges as it requires new areas and levels of expertise.
        </p>
        <p>
          This is where Enlaighten can help you reach your goals and ambitions.
          The expertise of our specialists covers a vast range of up-to-date
          digital and data technologies.
        </p>
        <p>
          You can outsource your data-related project to Enlaighten, or
          complement your own efforts by addding us as consultant. In addition,
          we also offer in-house training in important data-science topics to
          boost the skills of your teams.
        </p>
        <p>We assist you turning your data into new services and products.</p>
      </div>
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
