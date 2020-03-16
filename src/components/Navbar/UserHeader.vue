<template>
  <header class="header-user-page">
    <div class="user-info">
      <p>{{userInformation.firstName + ' ' + userInformation.lastName}}</p>
      <p>{{userInformation.email}}</p>
    </div>

    <div class="create-task">
      <uiButton
        v-if="this.$route.name === 'user'"
        @customerClick="goToCreateTask()"
      >
        Create Task
      </uiButton>

      <uiButton
        v-else
        @customerClick="goToMainUserPage()"
      >
        Back to main page
      </uiButton>

      <uiButton
        class="logout-button"
        @customerClick="logOutUser()"
      >
        Logout
      </uiButton>

    </div>

  </header>
</template>

<script>
  import uiButton from "../ui/uiButton";
  export default {
    name: "UserHeader",
    components: {
      uiButton
    },
    methods: {
      goToCreateTask () {
        this.$router.push('/user/' + this.userInformation.id +'/create')
      },
      goToMainUserPage () {
        this.$router.push('/user/' + this.userInformation.id)
      },
      logOutUser () {
        this.$store.dispatch('logoutUser')
        this.$router.push('/')
      }
    },
    computed: {
      userInformation () {
         return this.$store.getters.getUser
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-user-page {
    position: sticky;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    max-height: 90px;
    background-color: #6391b2;
    .user-info {
      display: flex;
      flex-direction: row;
      p {
        margin: 10px;
        color: #fff;
      }
    }
    .logout-button {
      margin-left: 10px;
    }
    .create-task {
      align-self: center;
    }
  }
</style>