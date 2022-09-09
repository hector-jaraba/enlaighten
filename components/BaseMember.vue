<template>
  <div>
    <figure class="picture">
      <img :src="`/img/${member.image}.jpg`" :alt="member.alt" />
    </figure>
    <div class="mt-3">
      <h3 class="font-extrabold text-2xl">{{ member.name }}</h3>
      <h4 class="font-light text-xl">{{ $t(member.position) }}</h4>
      <h5 class="font-light" v-if="member.description">
        {{ $t(member.description) }}
      </h5>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Member } from "@/types";
import { PropType } from "vue";
const props = defineProps({
  member: {
    type: Object as PropType<Member>,
    required: true,
  },
});
</script>

<style lang="postcss" scoped>
.picture {
  max-width: 230px;
}
</style>
