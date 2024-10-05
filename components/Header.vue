<template>
  <div
    class="flex items-center gap-20 justify-between px-20 py-10 max-w-7xl mx-auto"
  >
    <NuxtLink class="text-5xl font-semibold" to="/">Zamin Mirzad</NuxtLink>
    <ul class="flex items-center gap-4">
      <li class="text-2xl" v-for="{ id, text, toLink } in navList" :key="id">
        <nuxt-link :to="`#${toLink}`" class="hover:underline">{{
          text
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { navList } from "~/utils/utils";
</script>
