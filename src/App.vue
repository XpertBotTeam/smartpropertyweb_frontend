<script>
import AppHeader from './components/AppHeader.vue';
export default{
    name: 'App',
    components: { 
      AppHeader 
    },
    created(){
      const logoutTime = 60000; // milleseconds

    // Define a function to handle logout and redirection
    const logoutAndRedirect = () => {
      localStorage.removeItem('atoken');
      localStorage.removeItem('e');      
       // Redirect to the login page
      // You can also clear any user-related data or tokens here
    };

    // Start the auto logout timer
    setTimeout(logoutAndRedirect, logoutTime);
    }
    
}
</script>

<template>
  <AppHeader/>
  <RouterView/>
</template>



<style>
</style>
