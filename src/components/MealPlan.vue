<template>
  <div class="meal-plan-generator">
   <button v-on:click="getMeals">Get Meals</button>
   
  <meal-card v-for="meal in allMeals" v-bind:meal="meal" v-bind:key="meal.title"></meal-card>
   
  
  </div>
</template>

<script>
import mealPlanService from '../services/MealPlanService';
import mealCard from '../components/MealCard';

export default {
  name: 'meal-plan',
  components: {
    mealCard
  },
  data() {
    return {
      
  computed: {
  
  allMeals() {
    return this.$store.state.items;
}
  },
 
  methods: {
    getMeals() {
      mealPlanService.getMealPlan().then(response => {
        this.$store.commit("SET_MEAL_PLAN", response)
        
      })
    }
  }
}
  }
}


</script>
methods
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
