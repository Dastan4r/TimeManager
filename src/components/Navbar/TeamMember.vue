<template>
  <div class="member-info">
    <div class="member-card">
      <div class="member-photo">
      <img
        :src="this.member.picture.medium"
        alt="photo"
      >
      </div>
      <div class="member-description">
        <h4>{{this.member.name.title}} {{this.member.name.first}} {{this.member.name.last}}</h4>
        <p>{{this.member.email}}</p>
        <p>{{this.member.cell}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TeamMember",
    props: {
      member: Object
    }
  }
</script>

<style lang="scss" scoped>
  .member-info{
    margin: 15px 0;
    transition: all 0.3s linear;
    &:hover{
      transform: scale(1.1);
      cursor: pointer;
      .member-card {
        background-color: #51b290;
      }
    }
    .member-photo{
      margin: 10px 0;
      text-align: center;
      img {
        border-radius: 50%;
      }
    }
    .member-card {
      background-color: #6391b2;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: all 0.3s linear;
      .member-description {
        text-align: center;
        h4,p {
          margin-bottom: 10px;
        }
      }
    }
  }
</style>