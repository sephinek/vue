const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      name: 'Soo Hyun Kang',
      age: 31,
      imageUrl:
        'https://images.unsplash.com/photo-1571566882372-1598d88abd90?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };
  },

  methods: {
    ageInFiveYears() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
