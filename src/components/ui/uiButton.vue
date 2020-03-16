<template>
  <button
    @click="$emit('customerClick')"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "uiButton"
  }
</script>

<style lang="scss" scoped>
  button {
    padding: 5px 20px;
    border: 1px solid #fff;
    border-radius: 6px;
    color: #fff;
    background-color: transparent;
    transition: all 0.3s ease;

    &:hover {
      background-color: #fff;
      border-color: #4f64b2;
      color: #4f64b2;
    }

    &:focus {
      outline: none;
    }
  }
</style>