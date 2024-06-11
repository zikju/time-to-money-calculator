<script setup lang="ts">

import { computed } from 'vue'

// Import Base Store
import { useBaseStore } from 'stores/base.store'
const baseStore = useBaseStore()

// Import Icons
import {
  symOutlinedAttachMoney,
  symOutlinedAvTimer, symOutlinedCancel, symOutlinedCurrencyPound,
  symOutlinedEuroSymbol, symOutlinedSchedule
} from '@quasar/extras/material-symbols-outlined'

// Import Components
import CalculatorFormInput from 'components/calculator-form/CalculatorFormInput.vue'
import CalculatorFormInputControls from 'components/calculator-form/CalculatorFormInputControls.vue'
import CurrencySwitch from 'components/CurrencySwitch.vue'


/**
 * -------------------------------------
 * CALCULATOR
 * -------------------------------------
 */
const hourlyRate = computed({
  get: () => Number(baseStore.hourlyRate),
  set: (value) => {
    baseStore.hourlyRate = value
  }
})
const hoursWorked = computed({
  get: () => Number(baseStore.hoursWorked),
  set: (value) => {
    baseStore.hoursWorked = value
  }
})
const minutesWorked = computed({
  get: () => Number(baseStore.minutesWorked),
  set: (value) => {
    if (value > 59) {
      value = 59
    }
    baseStore.minutesWorked = value
  }
})
const calculationResult = computed(() => {
  let result = 0
  if (hourlyRate.value && (hoursWorked.value || minutesWorked.value)) {
    result = hourlyRate.value * hoursWorked.value + (Number(minutesWorked.value) / 60) * hourlyRate.value
  }
  return result
})

const currencyIcon = computed(() => {
  switch (baseStore.defaultCurrency) {
    case 'EUR':
      return symOutlinedEuroSymbol
    case 'USD':
      return symOutlinedAttachMoney
    case 'GBP':
      return symOutlinedCurrencyPound
    default:
      return symOutlinedAttachMoney
  }
})



function resetInputs () {
  hourlyRate.value = 0
  hoursWorked.value = 0
  minutesWorked.value = 0
}

</script>

<template>
  <q-page class="row flex flex-center">
    <div class="app-container q-pt-md">

      <!-- Title -->
      <h1 v-if="!$q.platform.is.bex && !$q.platform.is.mobile"
          class="text-h4 text-center q-my-sm text-weight-medium">
        Time to Money <span class="text-weight-bold">CALCULATOR</span>
      </h1>

      <!-- Description -->
      <p class="text-body2 text-center">
        Calculate your total earnings based on the number of hours and minutes worked. Get paid what you're worth!
      </p>

      <!-- Calculator Form -->
      <div class="q-mt-lg">
        <q-list>

          <!-- Hourly Rate -->
          <q-item>
            <q-item-section>
              <calculator-form-input v-model="hourlyRate"
                                :icon="currencyIcon"
                                :maxlength="6"
                                label="Your rate per hour"
              />
            </q-item-section>
            <q-item-section side>
              <calculator-form-input-controls
                  v-model="hourlyRate"
              />
            </q-item-section>
          </q-item>
          <!--/. Hourly Rate -->

          <!-- Hours Worked -->
          <q-item>
            <q-item-section>
              <calculator-form-input v-model="hoursWorked"
                                :icon="symOutlinedSchedule"
                                :maxlength="5"
                                label="Hours Worked"
              />
            </q-item-section>
            <q-item-section side>
              <calculator-form-input-controls
                  v-model="hoursWorked"
              />
            </q-item-section>
          </q-item>
          <!--/. Hours Worked -->

          <!-- Minutes Worked -->
          <q-item>
            <q-item-section>
              <calculator-form-input v-model="minutesWorked"
                                :icon="symOutlinedAvTimer"
                                :maxlength="2"
                                label="Minutes Worked"
              />
            </q-item-section>
            <q-item-section side>
              <calculator-form-input-controls
                  v-model="minutesWorked"
              />
            </q-item-section>
          </q-item>
          <!-- Minutes Worked -->

        </q-list>

        <!-- Calculation Result  -->
        <div class="row q-pa-md text-center">
          <div class="col-12 bg-orange-10 text-white q-py-sm">
            <div class="text-caption text-uppercase">
              Total:
            </div>
            <div class="text-h5 text-weight-bold">
              {{ calculationResult.toFixed(2) }} {{  baseStore.defaultCurrency }}
            </div>
          </div>
        </div>
        <!--/. Calculation Result  -->

      </div>
      <!--/. Calculator Form -->

      <q-separator inset class="q-my-md" />

      <div class="flex q-mx-md items-center">
        <!-- Reset Button  -->
        <div :class="[hourlyRate || hoursWorked || minutesWorked ? '' : 'opacity-0']"
             class="text-right">
          <q-btn class="q-px-md"
                 dense
                 outline
                 :icon="symOutlinedCancel"
                 label="reset"
                 size="sm"
                 @click="resetInputs"
          />
        </div>
        <q-space />
        <!--/. Reset Button  -->
        <currency-switch />
      </div>
    </div>

  </q-page>
</template>

<style lang="scss" scoped>
.app-container {
  width: 500px;
  margin: 10px;
  padding: 10px;
  backdrop-filter: blur(3px);
  @media (min-width: $breakpoint-md-min) {
    padding: 30px;
  }
}
body.body--light {
  .app-container {
    background-color: transparentize($grey-5, 0.9);
    border: 1px solid $grey-5;
  }
}
body.body--dark {
  .app-container {
    border: 1px solid transparentize($grey-4, 0.8);
  }
}
</style>
