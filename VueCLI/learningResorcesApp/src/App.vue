<template>
    <TheHeader title="RememberMe"></TheHeader>
    <TheResources></TheResources>
</template>


<script>

import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resorces/TheResources.vue';

export default {
    components:{
        TheHeader,
        TheResources        
    },  
    data() {
        return{
           
        }
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>