<template>
  <section id="contact" class="py-44 flex flex-col items-center gap-10">
    <div class="flex flex-col text-center">
      <span class="text-xs">Get In Touch</span>
      <h1 class="text-5xl font-semibold">Contact Me</h1>
    </div>
    <div class="w-fit mx-auto border rounded-3xl p-10 flex items-center gap-10">
      <UButton variant="outline" class="text-2xl">
        <Icon
          name="mdi:email-arrow-right-outline"
          style="color: green"
          size="24"
        />
        Email Me
      </UButton>
      <UButton variant="outline" class="text-2xl">
        <Icon name="uil:linkedin" style="color: green" size="24" />
        Linkedin
      </UButton>
    </div>
  </section>
</template>
