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
  watch: { //
    // name(value){
    //   if(value === ''){
    //     this.fullName = '';
    //   }else{
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value){
    //   if(value === ''){
    //     this.lastName = '';
    //   }else{
    //     this.fullName = this.name + ' ' + value;
    //   }
    // }
  
  },
  computed:{ //pelo computed a função só é chamada quando o valor muda
    // outputFullName(){
    //   console.log('passei pelo computed');
    //   if(this.name === ''){
    //     return '';
    //   }     
    //   return this.name + ' ' + 'Miller';
    // },
    fullName(){
      
    }


  },
  methods:{
    
    confirmInput(){
      this.confirmedName = this.name;
    },
    setName(event, lastName){
      this.name = event.target.value + lastName;
    },
    add(){
      this.counter = this.counter + 1;
    },
    remove(){
      this.counter = this.counter - 1;
    },
    submitForm(){
      event.preventDefault();
      alert('Submited')
    },
    resetInput(){
      this.name = '';
      this.counter = 0;
    }
  }
});

app.mount('#events');
