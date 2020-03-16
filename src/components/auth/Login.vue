<template>
  <div
    class="login-wrapper"
  >
    <input
      class="main-input"
      placeholder="Your email"
      type="email"
      v-model="email"
    >
    <input
      class="main-input"
      placeholder="Insert your password"
      type="password"
      v-model="password"
    >

    <div class="login-navigation">
      <uiButton
        @customerClick="backToHome()"
      >Back</uiButton>
      <uiButton
        @customerClick="loginUser()"
      >
        Login</uiButton>
    </div>
  </div>
</template>

<script>
  import uiButton from "../ui/uiButton";

  export default {
    name: "Login",
    data () {
      return {
        email: '',
        password: ''
      }
    },
    components: {
      uiButton
    },
    computed: {
      getUser () {
        return this.$store.getters.getUser
      }
    },
    methods: {
      backToHome () {
        this.$router.push('/')
      },
      loginUser () {
        const user = {
          firstName: this.getUser.firstName,
          lastName: this.getUser.lastName,
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('loginUser', user)
        this.$router.push('/user/' + this.getUser.id)
      }
    }
  }
</script>

<style lang="scss" >
  .login-wrapper {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    .login-navigation{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>