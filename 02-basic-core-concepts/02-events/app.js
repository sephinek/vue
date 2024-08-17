const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },

  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(e, lastName) {
      this.name = e.target.value + ' ' + lastName;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {},
  },
});

app.mount('#events');
