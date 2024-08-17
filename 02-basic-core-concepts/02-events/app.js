const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      lastName: '',
      // fullName: '',
    };
  },

  watch: {
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lasName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // },
    counter(value) {
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
  },

  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },

  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Kang';
    },
    // setName(e, lastName) {
    //   this.name = e.target.value;
    // },
    setName(e) {
      this.name = e.target.value;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
    submitForm() {},
  },
});

app.mount('#events');
