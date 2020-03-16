<template>
  <div class="container">
    <div class="row">
      <TeamMember
        v-for="(member, index) in allTeam"
        :key="index"
        :member="member"
        class="col-4"
      >
      </TeamMember>
    </div>
  </div>
</template>

<script>
  import TeamMember from "./TeamMember";
  export default {
    name: "TeamPage",
    components: {
      TeamMember
    },
    created() {
      this.$store.dispatch('getTeamMembersFromAPI')
    },
    computed: {
      allTeam () {
        return this.$store.getters.getAllTeam
      }
    }
  }
</script>

<style scoped>

</style>