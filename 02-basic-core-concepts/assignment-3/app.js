const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  computed: {
    result() {
      if (this.counter < 37) {
        return 'Not there yet!';
      } else if (this.counter > 37) {
        return 'Too much!';
      } else {
        return 'You got the number!';
      }
    },
  },

  watch: {
    result() {
      setTimeout(() => {
        this.number = 0;
      }, 10000);
    },
  },

  methods: {
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
  },
});

app.mount('#assignment');
