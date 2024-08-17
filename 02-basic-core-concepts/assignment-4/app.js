const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      isVisible: true,
      inputBg: '',
    };
  },
  computed: {
    pClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },
  methods: {
    toggleBtn() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount('#assignment');
