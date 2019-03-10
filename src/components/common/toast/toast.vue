<template>
  <transition>
    <div class="toast" v-if="visible">{{message}}</div>
  </transition>
</template>

<script>
  export default {
    name: 'toast',
    props: {
      message: {
        type: String
      }
    },
    data () {
      return {
        visible: false
      }
    }
  }
</script>

<style>
  .toast {
    display: inline-block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    padding: .1rem .2rem;
    font-size: .24rem;
    background: rgba(0, 0, 0, .6);
    line-height: 1.5;
    color: #fff;
    border-radius: .1rem;
  }
</style>
