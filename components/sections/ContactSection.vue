<template>
  <section id="contact" class="bg-background">
    <BaseContainer class="pt-20 pb-24">
      <div class="relative">
        <h2 class="title-strong mb-10" v-html="$t('contact_page_title')" />
      </div>

      <div class="flex flex-col items-center md:mt-24 md:mb-20 lg:flex-row">
        <div class="font-light text-gray lg:w-1/2">
          <span class="text-3xl lg:text-4xl block contact-engage">
            {{ $t("contact_firstPhrase_text") }}
          </span>
          <span class="text-2xl lg:text-3xl block mt-6">
            {{ $t("contact_secondPhrase_text") }}
          </span>
        </div>
        <div class="mt-12 lg:w-1/2 lg:mt-0 lg:pl-12">
          <LinkButton
            class="w-80 mx-auto"
            href="mailto:info@enlaighten.be"
            :type="bigAction"
          >
            info@enlaighten.be
          </LinkButton>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
<script lang="ts" setup>
import { BTN_TYPE } from "@/types";
const bigAction = "big-action" as BTN_TYPE.BIG_ACTION;
</script>
<style lang="postcss" scoped>
.contact-engage {
  line-height: 1.2em;
}
</style>
