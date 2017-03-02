<template>
<div class="login-area">
  <div class="row">
      <div class="signup-panel">
        <div class="head-title">
          <p>Login here:</p>
        </div>
        <div class="login-form">
          <form>
          <p class="welcome"> Enter the fields correctly</p>
            <div class="row collapse">
              <div class="small-12  columns">
                <input v-model="user.email" type="text" placeholder="Enter your email here">
              </div>
            </div>
            <div class="row collapse">
              <div class="small-12 columns ">
                <input v-model="user.cpassword" type="password" placeholder="Enter password here">
              </div>
            </div>
          </form>
          <button v-on:click="getUser()" class="button ">Sign in </button>
           <p>Don't have account? <router-link to = "/signup">Got to sign up</router-link></p>
           
        </div>
      </div>
   </div>
  </div>
</template>

<script>

import Vue from 'vue';
import VueResource from 'vue-resource';
import router from '../router';
import Vuex from 'vuex';

Vue.use(Vuex);


export default {
  data () {
    return {
      user:
      {
          username: null,
          cpassword: null
      }
    
    }
  },
  methods: {
    getUser () 
    {
      var user_api = 'https://vuetesting-c9c05.firebaseio.com/data.json';
      var session_api = 'https://vuetesting-c9c05.firebaseio.com/session/data.json';

      //get user from the form
      var user_email = this.user.email;
      var user_pass = this.user.cpassword;
      var userlogging = this.user;

      //get if user is registered
      Vue.http.get(user_api).then(

          //get the responce from firebase
          userResponse => {
            return userResponse.json();
          }
        ).then(
          getUserData => {
            for(let key in getUserData)
            {
              if(getUserData[key].email == user_email && getUserData[key].cpassword == user_pass)
              {
                //post this data to the session database
                Vue.http.post(session_api, userlogging).then( function(response){

                  if(response)
                  {
                    //this is for the console
                    console.log('success');
                    console.log(getUserData[key].email);
                    console.log(getUserData[key].cpassword);
                    console.log(response.data.name);

                    var mykey = response.data.name;
                    var uname = getUserData[key].username;

                    if (localStorage) {

                      localStorage.token = response.data.name;
                      localStorage.uname = getUserData[key].username;
                      localStorage.email = getUserData[key].email;

                        if(localStorage)
                        {
                          console.log(response.data.name, 'stored to localstorage');
                        }
                      } else {
                        console.log('Browser do not support local storage');
                      }
                  }
                  //end of posting to the session table


                  //redirect the user to the dashboard
                  router.push('/home');

                }), function (error) {

                console.log('Failed to login', response);
                }

              }
            }
          }
        )
    }
  },
  mounted () {


  }
}
</script>

<style> 
.head-title
{
  margin: 30px auto 5px auto;
  color: #006633;
}
.signup-panel
{
  margin: 100px auto 40px auto;
   width: 30%;
}
.login-form
{
  border: 1px solid #cacaca;
   padding: 20px;
   background-color: #fff;
}
</style>
