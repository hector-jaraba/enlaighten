<template>
  <section id="services" class="bg-backgroundDark lg:min-h-screen">
    <BaseContainer class="pt-20 pb-24">
      <div class="relative">
        <h1 class="title-strong mb-10">
          What <span class="text-primary">we offer you</span>
        </h1>
      </div>

      <ul class="services flex flex-col lg:flex-row lg:flex-wrap mt-28">
        <li
          v-for="service in services"
          :key="service.title"
          class="mb-16 lg:w-1/3 px-6 lg:px-3 xl:px-6"
        >
          <BaseService class="h-full" :service="service" />
        </li>
      </ul>
    </BaseContainer>
  </section>
</template>

<script lang="ts" setup>
import { ServiceItem } from "~~/types";

const services: ServiceItem[] = [
  {
    title: "Data science",
    alt: "brain",
    icon: "brain",
    description: [
      "Data science uses advanced analytics techniques and scientific principles to extract valuable information from data for business decision-making, strategic planning and other uses.",
      "The insights that data science generates help organizations increase operational efficiency, identify new business opportunities and improve marketing and sales programs, among other benefits.",
      "Ultimately, they can lead to competitive advantages over business rivals.",
    ],
  },
  {
    title: "Artificial Intelligence",
    alt: "robot",
    icon: "robot",
    description: [
      "AI focuses on finding patterns in noisy and complex data. It does so by generalizing from known training examples. ",
      "This  is a powerful technique that can be used when examples and counter examples are known but the underlying reason is not clear.",
    ],
  },
  {
    title: "Optimalization",
    alt: "node",
    icon: "node",
    description: [
      "Thanks to ever-expanding computational resources it is now possible to model and simulate complex physical or societal processes. ",
      "This then becomes the starting point for optimisation that will lead to higher efficiency or performance.",
    ],
  },
];
</script>
