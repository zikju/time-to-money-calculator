<script setup lang="ts">

// Import Icons
import { symOutlinedSentimentSad } from '@quasar/extras/material-symbols-outlined'

</script>

<template>
  <div class="fullscreen bg-dark text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 20vh;">
        4<q-icon :name="symOutlinedSentimentSad" />4
      </div>

      <div class="text-h4 text-weight-medium opacity-50">
        Oops. Page not found...
      </div>
      <div class="text-body1 q-my-md text-balance opacity-50">
        The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
      </div>

      <q-btn
          class="q-mt-xl"
          outline
          unelevated
          to="/"
          label="Let's go Home?"
          no-caps
      />
    </div>
  </div>
</template>
