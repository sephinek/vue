const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      confirmedInput: '',
    };
  },
  methods: {
    showAlert() {
      alert('Alert!');
    },
    saveInput(e) {
      this.userInput = e.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
  },
});

app.mount('#assignment');
