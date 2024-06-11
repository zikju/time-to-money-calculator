<template>
  <router-view />
</template>

<script setup lang="ts">

/* Use Quasar plugins */
import { useQuasar } from 'quasar'
const $q = useQuasar()

/* Use Base store */
import { useBaseStore } from 'stores/base.store'
const baseStore = useBaseStore()

// Set initial theme
$q.dark.set(baseStore.isDarkMode)

</script>
