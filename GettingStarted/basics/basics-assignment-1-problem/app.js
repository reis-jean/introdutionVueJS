const app = Vue.createApp({
    data() {
        return {
            myName: 'Jean Reis',
            myAge: 24,
            img: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            inputText: 'input text',
        };
    },

    methods: {
        outputRamdomNumber() {
            const randomNumber = Math.floor(Math.random() * 2);
            return randomNumber;            
        }
    }
});

app.mount('#assignment');