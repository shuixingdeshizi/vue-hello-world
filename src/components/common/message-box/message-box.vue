<template>
  <transition>
    <div class="message-box" v-show="visible">
      <div class="message-box-header">{{title}}</div>
      <div class="message-box-body">{{message}}</div>
      <div class="btns">
        <button type="button" @click="clickHandler(1)">{{okText}}</button>
        <button type="button" @click="clickHandler(0)">{{cancelText}}</button>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'message-box',
    props: {
      title: {
        type: String,
        default: '提示'
      },
      message: {
        type: String,
        default: ''
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      resolve: {
        type: Function
      },
      reject: {
        type: Function
      }
    },
    data () {
      return {
        visible: false
      }
    },
    methods: {
      clickHandler (value) {
        this.visible = false
        if (value) {
          this.resolve()
        } else {
          this.reject()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .message-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 6rem;
    height: auto;
    overflow: hidden;
    font-size: .28rem;
    border: 1px solid #333;
    border-radius: .2rem;
  }
  .message-box-header {
    width: 100%;
    height: 1rem;
    text-align: center;
    font-weight: bold;
    color: #fff;
    background: #333;
    line-height: 1rem;
  }
  .message-box-body {
    width: auto;
    height: auto;
    min-height: 2.5rem;
    padding: .2rem;
    background: #fff;
  }
  .btns {
    display: flex;
    justify-content: center;
    height: 1rem;
    border-top: 1px solid #333;
    button {
      flex: 1;
      background: none;
      border: none;
      &:first-child {
        border-right: 1px solid #333;
      }
    }
  }
</style>


