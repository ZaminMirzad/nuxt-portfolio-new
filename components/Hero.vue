<template>
  <section id="hero" class="flex items-center justify-center gap-20 py-52">
    <!-- image -->
    <div class="w-[400px] h-[400px] rounded-full overflow-hidden border-8">
      <NuxtImg
        class="w-full h-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>

    <!-- title -->
    <div class="flex flex-col gap-6 justify-center text-center">
      <p class="">Hello, I'm</p>
      <h1 class="text-5xl font-semibold">Zamin Mirzad</h1>
      <p class="">Fronted Developer</p>
      <div class="flex items-center gap-4">
        <UButton
          class="px-6 py-3"
          color="white"
          variant="solid"
          :ui="{ rounded: 'rounded-full' }"
          >Download CV</UButton
        >
        <UButton
          class="px-6 py-3"
          color="black"
          variant="solid"
          :ui="{ rounded: 'rounded-full' }"
          >Contact info</UButton
        >
      </div>
      <div class="flex items-center gap-4 text-center justify-center">
        <NuxtLink to="/">
          <Icon name="uil:github" style="color: black" size="36" />
        </NuxtLink>
        <NuxtLink to="/">
          <Icon name="uil:linkedin" style="color: black" size="36" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
