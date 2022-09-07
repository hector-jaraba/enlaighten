<template>
  <section id="contact" class="bg-background">
    <BaseContainer class="pt-20 pb-24">
      <div class="relative">
        <h1 class="title-strong mb-10">Contact us</h1>
      </div>

      <div class="flex flex-col items-center mt-24 mb-20 lg:flex-row">
        <div class="font-thin lg:w-1/2">
          <span class="text-4xl lg:text-5xl block contact-engage">
            Need a data whisperer to enlaighten you?
          </span>
          <span class="text-3xl lg:text-4xl block mt-6"
            >Don't hesitate to contact us</span
          >
        </div>
        <div class="mt-12 lg:w-1/2 lg:mt-0 lg:pl-12">
          <LinkButton href="mailto:info@enlaighten.be" type="big-action">
            info@enlaighten.be
          </LinkButton>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
<style lang="postcss" scoped>
.contact-engage {
  line-height: 1.2em;
}
</style>
