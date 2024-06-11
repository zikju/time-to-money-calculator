<script setup lang="ts">
import { computed } from 'vue'

// Import Base Store
import { useBaseStore } from 'stores/base.store'
const baseStore = useBaseStore()



/**
 * -------------------------------------
 * CURRENCY HANDLER
 * -------------------------------------
 */

const currencies = ['EUR', 'USD', 'GBP']

const defaultCurrency = computed(() => {
  return baseStore.defaultCurrency
})

function setDefaultCurrency (currency: string): void {
  baseStore.defaultCurrency = currency
}
</script>

<template>
  <q-btn-group unelevated class="q-gutter-x-sm">
    <q-btn v-for="currency in currencies" :key="currency"
           :color="defaultCurrency === currency ? 'accent' : ''"
           flat
           dense
           :label="currency"
           @click="setDefaultCurrency(currency)"
    />
  </q-btn-group>
</template>

<style scoped lang="scss">

</style>
