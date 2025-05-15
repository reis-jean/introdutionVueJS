const app = Vue.createApp({
  data() {
    return { goals: [] };
  },
  methods: {
    addGoal() {
      return this.goals.push(this.enteredGoalValue);
    }
  },  
});

app.mount('#user-goals');
