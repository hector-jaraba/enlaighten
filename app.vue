<template>
  <NuxtLayout>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <QuoteSection />
    <TeamSection />
    <ContactSection />
    <FooterSection />
  </NuxtLayout>
</template>
<script setup>
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import TeamSection from "@/components/sections/TeamSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import FooterSection from "@/components/sections/FooterSection.vue";
import QuoteSection from "./components/sections/QuoteSection.vue";
const title = ref("Enlaighten");
const description = ref(
  "We assist you turning your data into new services and producs."
);

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>
<style lang="postcss">
html,
body {
  font-family: "Lato";
  @apply text-dark;
}
</style>
