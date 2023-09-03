<template>
    <DashboardHeader/>
    <h1>{{ uEmail }} Locations page</h1>
  </template>
  
  <script>
  import DashboardHeader from './DashboardHeader.vue';
  
  export default{
      name: 'DashLocations',
      components: {
      DashboardHeader},
      data(){return{uEmail: ''}},
  
  mounted(){this.uEmail = this.$route.params.userEmail;},
      
      
      
      
  };
  </script>