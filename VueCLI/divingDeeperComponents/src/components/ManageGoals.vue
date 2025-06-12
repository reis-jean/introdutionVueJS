<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal"/>
        <button @click="setGoal">Set Goal</button>
    </div>
    <!-- teleport importa o component para a tag html especifica -->
    <teleport  to="body">
        <errorAlert v-if="inputIsInvalid">
            <h2>Input is invalid</h2>
            <p>Please Enter at least a few Characters ... </p>
            <button @click="confirmError">ok</button>
        </errorAlert>
    </teleport>
</template>

<script>
import errorAlert from './ErrorAlert.vue';

export default{
    components:{
        errorAlert
    },
    data(){
        return{
            inputIsInvalid: false
        }
    },
    methods:{
        setGoal(){
            const enteredValue = this.$refs.goal.value;            
            if(enteredValue == ''){
                this.inputIsInvalid = true
            }
        },
        confirmError(){
                this.inputIsInvalid = false
        }
    }
}

</script>