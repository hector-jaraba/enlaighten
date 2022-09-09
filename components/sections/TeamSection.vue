<template>
  <section id="team" class="bg-backgroundDark pb-16 md:pb-36 pt-10">
    <BaseContainer>
      <div class="relative">
        <h2 class="title-strong mb-10" v-html="$t('team_page_title')" />
      </div>

      <ul class="team flex flex-wrap">
        <li
          class="mx-auto sm:w-1/2 mt-16 md:w-1/2 lg:w-1/4 flex justify-center"
          v-for="member in members"
          :key="member.id"
        >
          <BaseMember :member="member" />
        </li>
      </ul>
    </BaseContainer>
  </section>
</template>
<script lang="ts" setup>
import { Member } from "@/types";

const members: Member[] = [
  {
    id: 0,
    alt: "Eric profile picture",
    image: "eric",
    name: "Eric",
    position: "team_machineLearning_label",
    description: "team_firstDescription_label",
  },
  {
    id: 1,
    alt: "Bernhard profile picture",
    image: "bernhard",
    name: "Bernhard",
    position: "team_dataScience_label",
    description: "team_secondDescription_label",
  },
  {
    id: 2,
    alt: "Hector profile picture",
    image: "hector",
    name: "Héctor",
    position: "team_seniorFrontend_label",
    description: "team_thirdDescription_label",
  },
  {
    id: 3,
    alt: "Cathlene profile picture",
    image: "cathlene",
    name: "Cathlene",
    position: "team_fullstack_label",
    description: "team_forthDescription_label",
  },
];
</script>
