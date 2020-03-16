<template>
  <div class="create-task-wrapper">
    <h2>Create Tasks</h2>
    <input
      required
      type="text"
      placeholder="Enter task title"
      v-model="titleTask"
    >
    <textarea
      required
      v-model="bodyTask"
      placeholder="Enter task description"
      name="task-description"
      cols="30"
      rows="10"
    >
    </textarea>
    <uiButton
      @customerClick="createTask()"
    >
      Create Task
    </uiButton>
  </div>
</template>

<script>
  import uiButton from "../ui/uiButton";

  export default {
    name: "CreateTaskForm",
    data() {
      return {
        titleTask: '',
        bodyTask: '',
        id: Date.now(),
        done: false
      }
    },
    components: {
      uiButton,
    },
    computed: {
      getUser() {
        return this.$store.getters.getUser
      }
    },
    methods: {
      createTask() {
        const task = {
          title: this.titleTask,
          body: this.bodyTask,
          id: this.id,
          done: this.done
        }
        this.$store.dispatch('addTask', task)
        this.$router.push('/user/' + this.getUser.id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .create-task-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50%;
    margin: 0 auto;

    input, textarea {
      margin-bottom: 15px;

      &:focus {
        outline: none;
      }
    }

    h2 {
      margin: 15px 0;
      color: #fff;
    }
  }
</style>