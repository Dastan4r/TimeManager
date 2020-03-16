<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import * as firebase from "firebase";
  export default {
    created () {
      const firebaseConfig = {
        apiKey: "AIzaSyA4Yg_N3bKkfd4SgvN4uvQSNzswwLSxeyw",
        authDomain: "timemanager-81a81.firebaseapp.com",
        databaseURL: "https://timemanager-81a81.firebaseio.com",
        projectId: "timemanager-81a81",
        storageBucket: "timemanager-81a81.appspot.com",
        messagingSenderId: "239427730584",
        appId: "1:239427730584:web:844c4550ac385b72ebe4ed"
      };

      firebase.initializeApp(firebaseConfig);
    },
  }
</script>

<style lang="scss">
 @import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');
 html body{
    background-color: #4f64b2;
    margin: 0;
    .home {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      input.main-input {
        padding: 5px 10px;
        border: 1px solid #fff;
        background-color: #4f64b2;
        border-radius: 6px;
        color:#fff;
        margin-bottom: 15px;
        min-width: 240px;
        &:focus {
          outline: none;
        }
        &::placeholder {
          color:#fff;
        }
      }
    }
  }

</style>
