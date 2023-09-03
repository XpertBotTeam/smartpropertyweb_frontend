<script>
import axios from 'axios';

export default {
  name: 'AppLogin',
  data() {
    return {
      email: '',
      password: '',
      stat: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://simp.xpertbotacademy.online/api/login', {
          email: this.email,
          password: this.password,
        });
        
        // Assuming the response contains a token upon successful login
        const token = response.data.token;
        
        // You can now save the token in local storage or Vuex store for later use
        localStorage.setItem('atoken', token);
        const e = this.email;
        localStorage.setItem('le', e);
        if (response.data.status == true){this.$router.push('/dashboard');
      const lt = Math.floor(Date.now()/1000);
    localStorage.setItem('ltkey',lt);
    } else 
        {this.$router.push('/login');
      this.stat ='invalid username or password';
      }
        // Redirect or perform any other action upon successful login
      } catch (error) {
        console.error('Login failed:', error);
        this.stat = 'error';
      }
    },
  },
};
</script>

<template>

<div class="vh-100 d-flex justify-content-center align-items-center">
            <div class="col-md-4 p-5 shadow-sm border rounded-5 border-primary">
                <h2 class="text-center mb-4 text-primary">Login</h2>
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input v-model="email" type="email" class="form-control border border-primary" id="exampleInputEmail1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control border border-primary" id="exampleInputPassword1">
                    </div>
                    <p class="small"><a class="text-primary" href="forget-password.html">Forgot password?</a></p>
                    <div class="d-grid">
                        <button class="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
                <div class="mt-3">
                    <p class="mb-0  text-center">Don't have an account? <a href="/register"
                            class="text-primary fw-bold">Sign
                            Up</a></p>
                </div>
                <div class="mt-3"><p class="mb-0 text-center">{{ stat }}</p></div>
            </div>
        </div>

</template>