<template>
  <div>
    <UserHeader></UserHeader>
    <router-view></router-view>

    <div
      class="container"
      v-if="this.$route.name == 'user'"
    >
      <div class="row">
        <TaskCard
          v-for="(task, index) in getTasks"
          :key="index"
          :done="task.done"
          :title="task.title"
          :body="task.body"
          :id="task.id"
        ></TaskCard>
      </div>
    </div>
  </div>
</template>

<script>
  import UserHeader from "./Navbar/UserHeader";
  import TaskCard from "./Tasks/TaskCard";

  export default {
    name: "User",
    components: {
      UserHeader,
      TaskCard
    },
    computed: {
      getTasks() {
        return this.$store.getters.getTasks
      }
    }
  }
</script>

<style lang="scss" scoped>
  .task-wrapper {
    margin-top: 30px;
  }
  .container {
    max-width: 1280px;
    margin-top: 20px;
    .col-md-4 {
      flex: 1 0 32.333333%;
    }
  }
</style>