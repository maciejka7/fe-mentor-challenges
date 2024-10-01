<template>
  <main
    text="gray-700 dark:gray-200"
    font-custom
  >
    <div class="h-screen">
      <section class="h-full flex flex-col gap-4">
        <top-menu />
        <div class="max-w-3/4 w-full flex flex-col self-center justify-center p-4">
          <RouterView />
        </div>
      </section>
    </div>
  </main>
</template>
