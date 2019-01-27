<template>
  <transition name="scale-fade">
    <div class="card-layer" v-if="isShow">
      <div class="mask" @click="hideLayer"></div>
      <div class="card-container">
        <img class="card-img" src="./img/card1.png">
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'card',
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        show: true
      }
    },
    methods: {
      hideLayer () {
        this.$emit('update:isShow', false)
        console.log('aa')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .scale-fade-enter-active, .scale-fade-leave-active {
    transition: all 1s ease;
  }
  .scale-fade-enter, .scale-fade-leave-to {
    transform: scale(0) rotateY(360deg);
    opacity: 0;
  }
  .card-layer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .mask {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0);
    }
  }
  .card-container {
    position: relative;
    width: 5.2rem;
    height: 7.05rem;

    .card-img {
      width: 100%;
      height: 100%;
    }
  }
</style>
