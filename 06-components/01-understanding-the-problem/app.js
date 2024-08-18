const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '012 567 3991',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '011 278 9391',
          email: 'julie@localhost.com',
        },
      ],
    };
  },
});

app.component('friend-contact', {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ areDetailsVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="areDetailsVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      areDetailsVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '012 567 3991',
        email: 'manuel@localhost.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.areDetailsVisible = !this.areDetailsVisible;
    },
  },
});

app.mount('#app');
