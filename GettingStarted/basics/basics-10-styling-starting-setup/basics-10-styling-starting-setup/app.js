const app = Vue.createApp({
    data() {
        return {
        boxASelected: false,
        boxBSelected: false,
        boxCSelected: false,
        title: 'Styling with Vue',
        show: true,
        items: ['Item 1', 'Item 2', 'Item 3'],
        isActive: false,
        isError: false,
        isSuccess: false,
        };
    },
    computed: {
        classObject() {
        return {
            active: this.isActive,
            error: this.isError,
            success: this.isSuccess,
        };
        },
    },
    methods: {
        boxSelect(box) {
            console.log(box);
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else if (box === 'C') {
                this.boxCSelected = !this.boxCSelected;
            }  
        },
        toggleActive() {
        this.isActive = !this.isActive;
        },
        toggleError() {
        this.isError = !this.isError;
        },
        toggleSuccess() {
        this.isSuccess = !this.isSuccess;
        },
    },

});


app.mount('#styling');