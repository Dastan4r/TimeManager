<template>
  <div class="link-container">
    <div class="icon-wrapper">
      <i class="material-icons">
        arrow_right_alt
      </i>
    </div>
    <ul class="link-list">
      <li
        v-for="(link, index) in this.arrayLinks"
        :key="index"
      >
        <router-link
          tag="a"
          :to="link.url"
        >
          {{link.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      const links = {
          arrayLinks: [
              {title: 'About Us', url: '/about'},
              {title: 'Contact', url: '/contact'},
              {title: 'Terms of use', url: '/terms'},
              {title: 'Careers', url: '/careers'},
              {title: 'Our Team', url: '/team'}
          ]
      }
      return links
    }
  }
</script>

<style lang="scss" scoped>
  .link-container {
    position: fixed;
    left: -200px;
    top: 0;
    min-width: 320px;
    height: 100vh;
    transition: left 0.5s ease;

    &:hover {
      left: 0;

      .icon-wrapper {
        transform: rotate(-180deg);
      }
    }

    .icon-wrapper {
      width: 32px;
      height: 32px;
      display: block;
      position: absolute;
      right: 20px;
      top: 20px;
      transition: all 0.5s ease;

      i {
        color: #fff;
        font-size: 37px;
      }
    }

    .link-list {
      list-style: none;
      height: 100vh;
      justify-content: center;
      flex-direction: column;
      display: flex;
      padding: 0;
      margin: 0;
      width: 200px;

      li {
        text-align: center;
        margin: 10px 0;

        a {
          display: block;
          text-decoration: none;
          color: #fff;
          font-size: 25px;
          font-family: 'Indie Flower', cursive;
          position: relative;

          &:after,
          &:before {
            content: '';
            display: block;
            height: 1px;
            width: 100%;
            background-color: #fff;
            opacity: 0;
            position: absolute;
            left: 0;
            transition: all 0.3s ease;
          }

          &:after {
            top: 0;
            transform: translateY(-5px);
          }

          &:before {
            bottom: 0;
            transform: translateY(5px);
          }

          &:hover {
            &:after,
            &:before {
              transform: translateY(0);
              opacity: 1;
            }
          }
        }
      }
    }
  }

</style>