<template>
  <div>
    <TheHeader/>

    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!--
     <ActiveGoals v-if="selectComponents == 'active-goals'"></ActiveGoals>
    <ManageGoals v-if="selectComponents == 'manage-goals'"></ManageGoals>
     -->

    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <!-- Com o keep-alive o vue mantem os components no Dom, e não apaga a instancia do component -->
    
  </div>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';


export default {
  components:{
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponent(cmp){
      this.selectedComponent = cmp;  
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>