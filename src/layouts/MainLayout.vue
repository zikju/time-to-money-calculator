<template>
  <q-layout view="hHh lpR fff">

    <!-- Header Component -->
    <page-header />

    <!-- Page content -->
    <q-page-container>
      <router-view/>
    </q-page-container>

    <!-- Footer Component -->
    <page-footer />

  </q-layout>
</template>

<script setup lang="ts">

// Import Components
import PageHeader from 'components/layout/PageHeader.vue'
import PageFooter from 'components/layout/PageFooter.vue'

</script>
