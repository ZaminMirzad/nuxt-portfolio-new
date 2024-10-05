<template>
  <section
    id="about"
    class="flex flex-col items-center justify-start gap-4 px-20 py-44 font-fredoka"
  >
    <div class="flex flex-col text-center">
      <span class="text-xs">Get to know more</span>
      <h1 class="text-5xl">About Me</h1>
    </div>
    <div class="flex items-center gap-10 w-full py-20">
      <!-- image -->
      <div class="min-w-[250px] h-[300px] overflow-hidden rounded-2xl border-8">
        <NuxtImg
          class="h-full w-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <!-- details -->
      <div class="">
        <div class="flex items-center gap-4 py-6 w-full">
          <UCard class="flex-1 text-center space-y-5 px-20 py-8">
            <Icon name="marketeq:gold-medal" style="color: black" size="24" />
            <h3 class="text-xl font-semibold">Experience</h3>
            <span class="">1+ Years</span>
            <h3 class="text-lg">Frontend Developer</h3>
          </UCard>
          <UCard class="flex-1 text-center space-y-5 px-20 py-8">
            <Icon
              name="mdi:account-school-outline"
              size="24"
              class="dark:text-white text-blue-500"
            />
            <h3 class="text-xl font-semibold">Education</h3>
            <span class="">B.Sc. Bachelors Degree</span>
            <h3 class="text-lg">Frontend Developer</h3>
          </UCard>
        </div>
        <p class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          distinctio molestias itaque libero est quos tempore. Pariatur at atque
          rerum commodi aperiam, placeat omnis dolorum ab magnam eveniet
          delectus doloremque.
        </p>
      </div>
    </div>
  </section>
</template>
