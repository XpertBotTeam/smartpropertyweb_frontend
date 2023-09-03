<script>
export default {
  name: 'DashboardHeader',
  data(){return{
  ue : localStorage.getItem('le')+''
}}
}
</script>

<template>
  
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
       <li class="nav-item active">
        <a class="nav-link"><RouterLink to="/dashboard/listings">All Listings<span class="sr-only"></span></RouterLink></a>
      </li>
        <li class="nav-item active">
        <a class="nav-link"><RouterLink :to="'/dashboard/locations/'+ue">Locations<span class="sr-only"></span></RouterLink></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><RouterLink :to="'/dashboard/profile/'+ue">Profile</RouterLink></a>
      </li>
      
    </ul>
  </div>
</nav>


</template>