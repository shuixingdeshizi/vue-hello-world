<template>
  <button type="button" class="close-button"
    @click="clickHandler">
    <img src="./img/close.png" />
  </button>
</template>

<script>
  export default {
    name: 'close-button',
    methods: {
      clickHandler () {
        this.$emit('click', null)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .close-button {
    display: block;
    width: .65rem;
    height: .65rem;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    overflow: hidden;
    background: none;
    border: none;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
</style>

