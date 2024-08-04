<template>
  <main
    text="gray-700 dark:gray-200"
    font-custom
  >
    <div class="h-screen">
      <section class="grid grid-cols-3 h-full gap-4">
        <SideMenu />
        <!-- <div class="h-full p-4 border-r shadow-sm border-teal-950">
          <h4>
            Projects:
          </h4>

          <ProjectList />
        </div> -->
        <div class="p-4">
          <RouterView />
        </div>
      </section>
    </div>
  </main>
</template>
