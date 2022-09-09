<template>
  <section class="bg-primary text-background pt-8 sm:pt-20 pb-10 sm:pb-0">
    <BaseContainer class="flex w-full">
      <div class="w-4/12 flex flex-col">
        <img
          src="/img/cath.png"
          class="hidden sm:block lg:mx-auto mt-auto w-80"
          alt="Cathlene Van Moorleghem"
        />
      </div>

      <div class="text-xl font-light lg:text-2xl leading-10 sm:w-8/12">
        <div v-html="$t('quote_description_text')"></div>
        <img class="ml-auto sm:mr-10 mt-4" src="/icons/quote.svg" alt="" />

        <div class="mt-16 mb-8">
          <span class="font-bold block" v-text="$t('quote_name_label')" />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
