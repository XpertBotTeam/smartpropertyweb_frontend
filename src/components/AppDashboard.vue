<template>
  <DashboardHeader/>
  <div><h1>{{ stat }}</h1></div>
  
</template>

<script>
import DashboardHeader from './DashboardHeader.vue';

export default{
    name: 'AppDashboard',
    data(){
      return{
        stat: 'Welcome '+localStorage.getItem('le'),
      }
    },
   
    components: {
    DashboardHeader
},
    
    
    
};
</script>
