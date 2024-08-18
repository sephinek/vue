const app = Vue.createApp({
  data() {
    return {
      enteredValue: '',
      tasks: [],
      isListShown: true,
    };
  },

  computed: {
    btnCaption() {
      return this.isListShown ? 'Hide List' : 'Show List';
    },
  },

  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
    },
    toggleList() {
      this.isListShown = !this.isListShown;
    },
  },
});

app.mount('#assignment');
