<template>
  <div class="home">
    <Navbar></Navbar>
    <h2>Time Manager</h2>

    <div
      class="mainlinks-wrapper"
      v-if="this.$route.name !== 'login' && this.$route.name !== 'registration'">

      <router-link
        to="/login"
        tag="a"
      >
        Login
      </router-link>

      <router-link
        tag="a"
        to="/registration"
      >
        Registration
      </router-link>

    </div>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from "../components/Navbar/Navbar";

  export default {
    name: 'Home',
    components: {
      Navbar
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    h2 {
      margin: 10px 0;
      font-family: 'Indie Flower', cursive;
      font-size: 80px;
      color: #fff;
      text-align: center;
    }

    .mainlinks-wrapper {
      margin-top: 40px;
      text-align: center;
      a {
        text-decoration: none;
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 6px;
        padding: 5px 15px;
        transition: all 0.3s ease;
        &:hover {
          background-color: #fff;
          color: #4f64b2;
          border: 1px solid #4f64b2;
        }
        &:first-child {
          margin-right: 30px;
        }
      }
    }
  }
</style>
