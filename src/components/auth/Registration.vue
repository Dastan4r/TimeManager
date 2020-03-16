<template>
  <div>
    <form
      class="registration-form"
    >
      <input
        placeholder="First name"
        v-model="firstName"
        required
        class="main-input"
      >
      <input
        placeholder="Last name"
        v-model="lastName"
        required
        class="main-input"
      >
      <input
        type="email"
        placeholder="Your email"
        v-model="email"
        required
        class="main-input"
      >
      <input
        type="password"
        placeholder="Your password"
        v-model="password"
        required
        class="main-input"
      >

      <div class="registration-navigation">
        <uiButton
          @customerClick="backToHome"
        >
          Back
        </uiButton>
        <uiButton
          @customerClick="sendForm"
        >
          Registration
        </uiButton>
      </div>

    </form>

  </div>
</template>

<script>

  import uiButton from "../ui/uiButton";
  export default {
    name: "Registration",
    data () {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }
    },
    components: {
       uiButton
    },
    methods: {
      backToHome () {
        this.$router.push('/')
      },
      sendForm () {
        const user = {
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName
        }

        this.$store.dispatch('registerUser', user)
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss">
  .registration-form {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .registration-navigation {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>