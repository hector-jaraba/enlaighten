<template>
  <section id="services" class="bg-backgroundDark">
    <BaseContainer class="pt-12 md:pt-20 xl:pb-16">
      <div class="relative">
        <h2 class="title-strong mb-10">
          What <span class="text-primary">we offer you</span>
        </h2>
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
        <h4 class="font-extrabold">What makes us different?</h4>

        <div class="flex relative">
          <div class="font-light leading-10 mt-6 sm:w-7/12">
            <p>
              Anchored in industry with a sound expertise in academia, the main
              assets are our people. The expertise of our specialists covers a
              vast range of up-to-date and practical digital and data
              technologies.
            </p>
            <p>
              Enlaighten brings a flat corporate structure to deep learning. We
              are well aware of the realities of projects and their changing
              scope. We are able to adapt swiftly.
            </p>
          </div>
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
    title: "Data science",
    alt: "",
    icon: "brain",
    description: [
      "Data science uses advanced analytics techniques and scientific principles to extract valuable information from data for business decision-making, strategic planning and other uses.",
      "The insights that data science generates help organizations increase operational efficiency, identify new business opportunities and improve marketing and sales programs, among other benefits.",
      "Ultimately, they can lead to competitive advantages over business rivals.",
    ],
  },
  {
    title: "Artificial Intelligence",
    alt: "",
    icon: "robot",
    description: [
      "AI focuses on finding patterns in noisy and complex data. It does so by generalizing from known training examples. ",
      "This  is a powerful technique that can be used when examples and counter examples are known but the underlying reason is not clear.",
    ],
  },
  {
    title: "Optimisation",
    alt: "",
    icon: "node",
    description: [
      "Thanks to ever-expanding computational resources it is now possible to model and simulate complex physical or societal processes. ",
      "This then becomes the starting point for optimisation that will lead to higher efficiency or performance.",
    ],
  },
];
</script>
