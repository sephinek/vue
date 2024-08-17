Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoal() {
      if (this.enteredValue.trim() === '') return;
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
  },
}).mount('#app');

// Vanilla JavaScript
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   if (inputEl.value.trim() === '') return;
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.append(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
// window.addEventListener('keydown', (e) => {
//   if (e.code === 'Enter') addGoal();
// });
