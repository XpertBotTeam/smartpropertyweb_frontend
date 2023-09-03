<script>
import axios from 'axios';
export default {
  name: 'AppRegister',
  data() {
    return {
      uname: '',
      email: '',
      password: '',
      cpassword: '',
      message: ''
    };
  },
  methods: {
    newUser() {
      const formData = {
        name: this.uname,
        email: this.email,
        password: this.password
      };
      if (this.password != this.cpassword){this.message = 'confirmation password is wrong';}else
      {axios.post('https://simp.xpertbotacademy.online/api/register', formData)
        .then(response => {
          console.log(response);
          this.message = 'Registration confirmed';
        })
        .catch(error => {
          console.log(error);
        });}
    }
  }
};


</script>

<template>

<div class="vh-100 d-flex justify-content-center align-items-center">
            <div class="col-md-4 p-5 shadow-sm border rounded-5 border-primary">
                <h2 class="text-center mb-4 text-primary">Create an account</h2>
                <form @submit.prevent= "newUser">
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Name</label>
                        <input  v-model="uname" type="text" class="form-control border border-primary" id="exampleInputName" required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input v-model="email" type="email" class="form-control border border-primary" id="exampleInputEmail1" required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control border border-primary" id="exampleInputPassword1" required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputConfirmedPassword1" class="form-label">Confirm Password</label>
                        <input v-model="cpassword" type="password" class="form-control border border-primary" id="exampleInputConfirmedPassword1" required/>
                    </div>
                    <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2"  type="checkbox" value="A" id="a" v-model="agreebox" required/>
                  <label class="form-check-label" >
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>
                    <div class="d-grid">
                        <button class="btn btn-primary" type="submit">Register</button>
                    </div>
                </form>
                <div class="mt-3">
                    <p class="mb-0  text-center">Have already an account? <a href="/login"
                            class="text-primary fw-bold">Login
                            </a></p>
                            <p class="mb-0  text-center"> {{ message }}</p>
                </div>
            </div>


        </div>
</template>