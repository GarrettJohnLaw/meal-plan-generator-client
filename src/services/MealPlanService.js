import axios from "axios";

const http = axios.create({
    baseURL: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate"
  });

const headers = {
    headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': 'ed89ebd8ebmsh2e00a8db8624007p16b218jsn03b0441509d2'
      }
  }


  export default {

    getMealPlan() {
      return http.get('', headers);
    },
  
    
  
  }
  

