<template>
  <div class="home">
    
    <mealPlan></mealPlan>
  </div>
</template>

<script>

import mealPlan from '@/components/MealPlan.vue'


export default {
  name: 'Home',
  components: {
    mealPlan
  }
}
</script>
