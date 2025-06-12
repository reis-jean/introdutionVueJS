<template>
    <dialog open="">
        <slot></slot>
    </dialog>
</template>

<script>
export default{
    methods:{
        setGoal(){
            const enteredValue = this.$refs.goal.value;            
            
        }
    }
}

</script>


 <style scoped>

 dialog{
    position: fixed;
    margin: 0;
    top: 20vh;
    left: 30%;
    width: 50%;
    background: white;
    box-shadow: 0 2px 8px rgb(0, 0, 0, 0.26);
    padding: 1rem;

 }
</style>