<template>
  <footer class="flex flex-col items-center justify-center gap-6 py-10 w-full">
    <Header />

    <p class="text-gray-400 text-sm">
      Copyright @ {{ new Date().getFullYear() }} Zamin Mirzad. All rights
      reserved
    </p>
  </footer>
</template>

<script setup>
import { navList } from "~/utils/utils";
</script>
