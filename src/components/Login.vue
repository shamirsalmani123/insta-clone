<template>
  <div>
    <v-card
     outlined
     tile
     width="400"
     class="mx-auto mt-16"
    >
      <!-- Instagram text Logo -->
      <v-img
       src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
       max-height="100"
       max-width="200"
       class="mx-auto my-6"
      />

      <!-- Form -->
      <v-card-text>
        <v-form
          max-width="100"
          class="form mx-auto"
        >
          <!-- Phone, username or email Field -->
          <v-text-field
          :rules="[rules.required]"
            label="Phone number, username or email"
            filled
            height="25"
          />

          <!-- Password Field -->
          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            filled
            label="Password"
            hint="At least 8 characters"
            class="input-group--focused"
            @click:append="show2 = !show2"
          />
          <router-link
          to="/newsfeed"
          class="mr-8"
          >
            <button
            class="login text-center primary white--text py-2"
            >
              Login
            </button>
          </router-link>
          <!-- Login Button -->
          
        </v-form>
      </v-card-text>

      <!-- spacer -->
      <v-card-text class="text-center py-0">OR</v-card-text>

      <!-- Login with Facebook -->
      <v-card-text class="text-center text font-weight-medium">
       <a href="#">Log in with facebook</a> 
      </v-card-text>

      <!-- Forgot Password -->
      <v-card-subtitle class="subtitle text-center py-1 mb-6">
        <a href="#">Forgot Password?</a>
      </v-card-subtitle>
    </v-card>

    <!-- Create Account Card -->
    <v-card
     outlined
     tile
     width="400"
     class="mx-auto mt-6"
    >
      <v-card-text class="text-center text py-6">
        Don't have an account? <span class="font-weight-medium"><a href="">Sign Up</a></span>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        show2: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
      }
    }
  }
  
</script>

<style scoped>

.form {
  width: 300px;
}

.login {
  width: 300px;
}

.text {
  font-size: 16px;
}
.text a {
  text-decoration: none;
}

.subtitle{
  font-size: 14px;
}
.subtitle a {
  text-decoration: none;
}
</style>