const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: '',
      lastName: '',
    };
  },
  watch: { //observa a variavel e 
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
      }
    },
    name(value) {
      if (value === '') {
        this.fullName = '';
      } else {
        this.fullName = value + ' ' + this.lastName;
      }
    },
    lastName(value) {
      if (this.name === '') {
        this.fullName = '';
      } else {
        this.fullName = this.name + ' ' + value;
      }
    }
  },
  computed: {
    fullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
