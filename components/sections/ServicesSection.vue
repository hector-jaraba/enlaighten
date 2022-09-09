<template>
  <section id="services" class="bg-backgroundDark">
    <BaseContainer class="pt-12 md:pt-10 xl:pb-16">
      <div class="relative">
        <h2 class="title-strong mb-10" v-html="$t('services_page_title')" />
      </div>

      <ul
        class="services flex flex-col lg:flex-row lg:flex-wrap mt-20 md:mt-28"
      >
        <li
          v-for="service in services"
          :key="service.title"
          class="mb-16 lg:w-1/3 px-6 lg:px-3 xl:px-6"
        >
          <BaseService class="h-full" :service="service" />
        </li>
      </ul>
      <div class="text-xl lg:text-2xl pt-10 md:pb-40">
        <h4 class="font-extrabold" v-text="$t('services_different_title')" />

        <div class="flex relative">
          <div
            class="font-light leading-10 mt-6 sm:w-7/12"
            v-html="$t('services_different_text')"
          ></div>
          <img
            class="-z-10 hidden sm:block lg:left-36 xl:left-96 absolute"
            src="/img/lamp.svg"
            alt=""
          />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script lang="ts" setup>
import { ServiceItem } from "~~/types";

const services: ServiceItem[] = [
  {
    title: "services_dataScience_title",
    alt: "",
    icon: "brain",
    description: "services_dataScience_text",
  },
  {
    title: "services_AI_title",
    alt: "",
    icon: "robot",
    description: "services_AI_text",
  },
  {
    title: "services_optimisation_title",
    alt: "",
    icon: "node",
    description: "services_optimisation_text",
  },
];
</script>
