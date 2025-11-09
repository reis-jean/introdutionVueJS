<template>
  <button @click="confirmInput">Confirm</button>  
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods:{
    confirmInput(){
      // do something
      this.$router.push('/teams');
    }
  },
  beforeRouteEnter(to, from, next){
    console.log('Navigation to:', to.fullPath);
    console.log('Navigation from:', from.fullPath);
    next();
    // Ele é executado dentro do componente, roda quando o componente é carregado
  },
  unmounted(){
    console.log('UsersList unmounted');
    // Ele é executado dentro do componente, roda quando o componente é desmontado
    // Ele é útil para executar lógica de cleanup, como:
    // ✅ Limpar intervalos
    // ✅ Limpar timeouts
    // ✅ Limpar listeners
    // ✅ Limpar variáveis
    // ✅ Limpar conexões
    // ✅ Limpar conexões
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>