<script setup lang="ts">

import { computed, ref } from 'vue'

/**
 * -------------------------------------
 * PROPS
 * -------------------------------------
 */
const props = defineProps({
  label: {
    type: String
  },
  maxlength: {
    type: [String, Number],
    default: 6
  },
  icon: {
    type: String
  }
})



/**
 * -------------------------------------
 * MODEL
 * -------------------------------------
 */
const modelName = defineModel<number>()
const computedModelName = computed({
  get () {
    if (modelName.value && modelName.value > 0) {
      return modelName.value
    }
    return null
  },
  set (value) {
    if (!value) {
      modelName.value = 0
      return
    }
    modelName.value = value
  }
})



/**
 * -------------------------------------
 * INPUT
 * -------------------------------------
 */
const inputMask = computed(() => {
  return '#'.repeat(Number(props.maxlength))
})

const calculatorInputRef = ref<HTMLInputElement|null>(null)
function selectInputValue () {
  if (calculatorInputRef.value) {
    calculatorInputRef.value.select()
  }
}

</script>

<template>
  <q-input ref="calculatorInputRef"
           v-model.number.trim="computedModelName"
           :label-color="$q.dark.isActive ? 'grey-1' : 'dark'"
           :mask="inputMask"
           :maxlength="props.maxlength"
           clearable
           color="orange-8"
           input-class="text-weight-bold text-uppercase"
           label-slot
           outlined
           @click="selectInputValue()"
  >
    <template v-slot:label>
      <span class="text-uppercase text-caption">
        {{ props.label }}
      </span>
    </template>
    <template v-slot:prepend>
      <q-icon :name="props.icon" />
    </template>
  </q-input>
</template>

<style scoped lang="scss">

</style>
