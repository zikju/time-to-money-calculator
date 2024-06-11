<script setup lang="ts">

// Import Icons
import { symOutlinedAdd, symOutlinedRemove } from '@quasar/extras/material-symbols-outlined'

// Import Models
const model = defineModel<number>()



/**
 * -------------------------------------
 * METHODS
 * -------------------------------------
 */

function increaseNumber (): void {
  if (!model.value) {
    model.value = 0
  }
  model.value++
}
function decreaseNumber (): void {
  if (!model.value) {
    model.value = 0
  }
  if (model.value > 0) {
    model.value--
  } else {
    model.value = 0
  }
}
</script>

<template>
  <q-btn v-touch-repeat:0:100.mouse.enter.space="increaseNumber"
         :icon="symOutlinedAdd"
         class="q-mb-sm"
         dense
         outline
         push
         size="sm"
         @click="increaseNumber()"
  />
  <q-btn v-touch-repeat:0:100.mouse.enter.space="decreaseNumber"
         :icon="symOutlinedRemove"
         dense
         outline
         push
         size="sm"
         @click="decreaseNumber()"
  />
</template>

<style scoped lang="scss">

</style>
