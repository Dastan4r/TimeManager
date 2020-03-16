<template>
  <div :class="{done: this.done}" class="task col-md-4">

    <h2 class="task-title">{{this.title}}</h2>
    <p class="task-description">{{this.body}}</p>

    <div class="task-navigation">
      <uiButton
        v-if="!done"
        @customerClick="doneTask(id)"
      >
        Done Task
      </uiButton>
      <uiButton
        @customerClick="deleteTask(id)"
      >
        Delete Task
      </uiButton>
    </div>
  </div>
</template>

<script>
  import uiButton from "../ui/uiButton";

  export default {
    name: "TaskCard",
    props: {
      title: [String, Number],
      body: [String, Number],
      id: Number,
      done: Boolean
    },
    components: {
      uiButton
    },
    methods: {
      deleteTask(id) {
        this.$store.dispatch('removeTask', id)
      },
      doneTask(id) {
        this.$store.dispatch('doneTask', id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .task {
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #fff;
    background-color: #6391b2;
    border-radius: 6px;
    margin: 0 10px 10px 0;
    &.done {
      background-color: #51b290;
    }

    h2 {
      margin: 10px 0;
    }

    .task-navigation {
      display: flex;
      transform: translateY(50px);
      flex-direction: row;
      justify-content: flex-end;

      button {
        &:first-child {
          margin-right: 10px;
        }
      }
    }
  }
</style>