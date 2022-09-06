<template>
  <section class="w-screen h-screen relative">
    <BaseContainer>
      <div class="mt-28 w-full sm:w-title">
        <h1 class="title-strong">
          Bringing the <span class="text-primary">spotlight</span> to data
        </h1>
        <h3 class="text-2xl text-gray font-light ml-1 mt-4">
          We assist you turning your data into new services and producs
        </h3>
        <div class="flex flex-col mt-8 sm:flex-row">
          <LinkButton href="#about" :type="outline"> Discover more </LinkButton>
          <LinkButton href="#contact" class="mt-4 sm:ml-8 sm:mt-0">
            Contact us
          </LinkButton>
        </div>
      </div>
    </BaseContainer>

    <WavesAnimation class="absolute top-0" :top="250" />
  </section>
</template>

<script lang="ts" setup>
import { BTN_TYPE } from "@/types";
const outline = "outline" as BTN_TYPE.OUTLINE;
</script>
