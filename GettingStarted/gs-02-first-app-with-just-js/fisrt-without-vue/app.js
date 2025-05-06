// const buttonEl = document.querySelector('button'); // get the button element
// const inputEl = document.querySelector('input'); // get the input element
// const listEl = document.querySelector('ul'); // get the ul element

// function addGoal() {
//   const enteredValue = inputEl.value; // get the value of the input element
//   const listItemEl = document.createElement('li'); // create a new li element
//   listItemEl.textContent = enteredValue;  // set the text content of the li element
//   listEl.appendChild(listItemEl); // append the li element to the ul element
//   inputEl.value = ''; // clear the input element
// }

// buttonEl.addEventListener('click', addGoal);

// com VUe

Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
}).mount('#app');