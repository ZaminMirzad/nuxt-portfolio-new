<template>
  <section
    id="experience"
    class="flex flex-col items-center gap-20 px-20 py-44"
  >
    <div class="flex flex-col text-center">
      <span class="text-xs">Explore my</span>
      <h1 class="text-5xl font-semibold">Experience</h1>
    </div>

    <!-- contents  -->
    <div class="flex items-center gap-10">
      <UCard class="flex-1 text-center space-y-5 px-20 py-8">
        <h3 class="text-2xl">Frontend Development</h3>
        <div class="grid grid-cols-3 py-4 gap-4">
          <div
            class="col-span-1 flex items-start gap-2"
            v-for="{ id, skill, level } in skillList"
            :key="id"
          >
            <UIcon name="material-symbols-light:verified" class="h-5 w-5" />
            <div class="flex flex-col text-sm items-start gap-0">
              <span class="uppercase font-semibold text-lg">{{ skill }}</span>
              <span class="capitalize text-xs">{{ level }}</span>
            </div>
          </div>
        </div>
      </UCard>
      <UCard class="flex-1 text-center space-y-5 px-20 py-8">
        <h3 class="text-2xl">Backend Development</h3>
        <div class="grid grid-cols-3 py-4 gap-4">
          <div
            class="col-span-1 flex items-start gap-2"
            v-for="{ id, skill, level } in skillList"
            :key="id"
          >
            <UIcon name="material-symbols-light:verified" class="h-5 w-5" />
            <div class="flex flex-col text-sm items-start gap-1">
              <span class="uppercase font-semibold text-lg">{{ skill }}</span>
              <span class="capitalize text-xs">{{ level }}</span>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>

<script>
import { skillList } from "~/utils/utils";
</script>
