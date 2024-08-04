<script setup lang="ts">
import type { CSSColorValue } from 'unocss'
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  tagColor: CSSColorValue
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm flex ',
        props.class,
      )
    "
  >
    <div :style="{ backgroundColor: tagColor }" class="w-1" />
    <slot />
  </div>
</template>
