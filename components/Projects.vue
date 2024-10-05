<template>
  <section id="projects" class="flex flex-col items-center gap-20 px-20 py-44">
    <div class="flex flex-col text-center capitalize">
      <span class="text-xs">Browse my recent</span>
      <h1 class="text-5xl font-semibold">Projects</h1>
    </div>

    <!-- contents  -->
    <div class="flex items-center gap-6">
      <ProjectCard
        v-for="{
          id,
          title,
          imageLink,
          githubLink,
          liveDemoLink,
        } in projects.slice(0, 4)"
        :key="id"
        :title="title"
        :imageLink="imageLink"
        :githubLink="githubLink"
        :liveDemoLink="liveDemoLink"
      />
    </div>
  </section>
</template>

<script>
import { projects } from "~/utils/utils";
import ProjectCard from "./ProjectCard.vue";
</script>
