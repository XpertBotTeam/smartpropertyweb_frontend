<template>
    <DashboardHeader/>
    <h1>{{ uEmail }} New Property Form to be added</h1>
  </template>
  
  <script>
  import DashboardHeader from './DashboardHeader.vue';
  
  export default{
      name: 'ProfileNewProperty',
      components: {
      DashboardHeader},
      data(){return{uEmail: ''}},
  
  mounted(){this.uEmail = this.$route.params.userEmail;},
      
      
      
      
  };
  </script>