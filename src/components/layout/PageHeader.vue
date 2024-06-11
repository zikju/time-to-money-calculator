<script setup lang="ts">

// Import Components
import ThemeToggleSwitch from 'components/ThemeToggleSwitch.vue'

</script>

<template>
  <q-header class="bg-orange-10">
    <q-toolbar class="constrained-width">
      <q-toolbar-title v-if="$q.platform.is.bex || $q.platform.is.mobile">
        Time to Money Calculator
      </q-toolbar-title>
      <q-space v-if="!$q.platform.is.bex && !$q.platform.is.mobile"/>
      <div>
        <theme-toggle-switch/>
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped lang="scss">

</style>
