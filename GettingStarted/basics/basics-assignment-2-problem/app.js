const app = Vue.createApp({
    data() {
        return {
            userInput: 'Output',
            userInputEnter: 'Output pressed Enter',
           
        };
    },

    methods: {
        showAlert() {
            alert('Hello World!');          
        }, 
        updateOutput(event) {
            this.userInput = event.target.value;
        },
        updateOutputEnter(event) {
            this.userInputEnter = event.target.value;
        },
    }
});

app.mount('#assignment');