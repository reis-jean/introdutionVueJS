<template>
    <form @submit.prevent="SubmitData" >
        <!-- Envia o form sem recarregar a pagina -->
        <div>
            <label for="">Name</label>
            <input type="text" v-model="enteredName">
        </div>
        <div>
            <label for="">Phone</label>
            <input type="tel" v-model="enteredPhone">
        </div>
        <div>
            <label for="">email</label>
            <input type="email" v-model="enteredEmail">
        </div>
        <div>
            <button>Add contact</button>
        </div>
    </form>
</template>

<script>
export default{
    emits: ['add-contact'],
    data(){
        return{
            enteredName: '',
            enteredPhone: '',
            enteredEmail: '',
        }
    },
    methods:{
        SubmitData(){
            this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
        }
    }
}


</script>