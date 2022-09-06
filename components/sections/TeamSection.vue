<template>
  <section id="team" class="bg-backgroundDark pb-36">
    <BaseContainer class="pt-20 pb-24">
      <div class="w-1/2 relative">
        <h1 class="title-strong mb-10">
          Meet the <span class="text-primary">team</span>
        </h1>
      </div>

      <ul class="team flex flex-wrap mt-28">
        <li
          class="w-1/3 flex justify-center"
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
    alt: "hector jaraba profile picture",
    image: "hj",
    name: "Héctor Jaraba",
    position: "Senior software engineer",
  },
  {
    id: 1,
    alt: "hector jaraba profile picture",
    image: "hj",
    name: "Héctor Jaraba",
    position: "Senior software engineer",
  },
  {
    id: 2,
    alt: "hector jaraba profile picture",
    image: "hj",
    name: "Héctor Jaraba",
    position: "Senior software engineer",
  },
];
</script>
