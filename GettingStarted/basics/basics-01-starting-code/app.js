  const app = Vue.createApp({
    data() {
        return {
            courseGoalA: '<h2>Finish the course and learn Vue!</h2>',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org/'
        };
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
    
  });

  app.mount('#user-goal');
