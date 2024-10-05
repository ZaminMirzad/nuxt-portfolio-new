<template>
  <UCard class="h-96 w-72 group">
    <div class="flex flex-col gap-4 w-full h-full">
      <!-- card image -->
      <div class="rounded-lg overflow-hidden h-64">
        <NuxtImg
          class="h-full w-full object-cover group-hover:scale-110 transition duration-200 group-hover:rotate-6"
          :src="imageLink"
        />
      </div>

      <!-- card details -->
      <div class="text-center">
        <h4 class="text-lg capitalize line-clamp-1">{{ title }}</h4>
        <div class="flex items-center gap-4 pt-2 justify-center">
          <UButton
            as="button"
            :to="githubLink"
            variant="soft"
            class="flex items-center gap-1"
          >
            <Icon name="uil:github" style="color: green" size="24" />
            GitHub</UButton
          >
          <UButton
            as="button"
            :to="liveDemoLink"
            variant="soft"
            class="flex items-center gap-1"
          >
            <Icon
              name="material-symbols-light:web-traffic"
              style="color: black"
              size="24"
            />

            Live Demo
          </UButton>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  imageLink: String,
  githubLink: String,
  liveDemoLink: String,
});
</script>
