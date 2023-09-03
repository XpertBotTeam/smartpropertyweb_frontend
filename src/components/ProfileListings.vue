<template>
    <DashboardHeader/>
    <h1>{{ uEmail }} Listings</h1>
  </template>
  
  <script>
  import DashboardHeader from './DashboardHeader.vue';
  
  export default{
      name: 'ProfileListings',
      components: {
      DashboardHeader},
      data(){return{uEmail: ''}},
  
  mounted(){this.uEmail = this.$route.params.userEmail;},
      
      
      
      
  };
  </script>