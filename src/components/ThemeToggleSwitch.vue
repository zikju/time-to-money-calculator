<script setup lang="ts">

import { computed } from 'vue'

/* Use Quasar plugins */
import { useQuasar } from 'quasar'
const $q = useQuasar()

/* Use Base store */
import { useBaseStore } from 'stores/base.store'
const baseStore = useBaseStore()

// Import icons
import { symOutlinedDarkMode, symOutlinedLightMode } from '@quasar/extras/material-symbols-outlined'


const toggleDarkMode = computed({
  get: () => $q.dark.isActive,
  set: (value) => {
    baseStore.isDarkMode = value
    $q.dark.set(value)
  }
})

</script>

<template>
  <q-toggle
      v-model="toggleDarkMode"
      :checked-icon="symOutlinedDarkMode"
      :unchecked-icon="symOutlinedLightMode"
      color="dark"
      name="toggleDarkMode"
      size="lg"
  />
</template>

<style scoped>

</style>
