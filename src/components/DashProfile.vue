<template>
    <DashboardHeader/>
    <h1> {{ uEmail }}</h1>
    <button type="button" class="btn btn-primary btn-lg" @click="navtoMylistings">My Listings</button><br><br>
    <button type="button" class="btn btn-primary btn-lg" @click="navtoNewProperty">New Property</button><br><br>
    <button type="button" class="btn btn-primary btn-lg" @click="logout">Log Out</button>
  </template>
  
  <script>
  import DashboardHeader from './DashboardHeader.vue';
  
  export default{
      name: 'DashProfile',
      components: {
      DashboardHeader},
      data(){return{uEmail: ''}},
  
  mounted(){this.uEmail = this.$route.params.userEmail;},
  methods: {
      navtoMylistings(){
        this.$router.push(`/dashboard/profile/${this.uEmail}/mylistings`);},
        navtoNewProperty(){
        this.$router.push(`/dashboard/profile/${this.uEmail}/newproperty`);},
      logout() {
          // Clear the token from local storage
          localStorage.removeItem('atoken');
          localStorage.removeItem('e');
          // Redirect to the login page
          this.$router.push('/login');
      },
  },
      
      
      
  };
  </script>
  