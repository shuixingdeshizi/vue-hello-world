<template>
  <div>
    <button @click='showMsg'>show Message</button>
    <button @click='toast'>toast define</button>
  </div>
</template>

<script>
  import messageBox from '@/components/common/message-box/message-box.js'
  import Toast from '@/components/common/toast/toast.js'
  export default {
    name: 'demo',
    methods: {
      showMsg () {
        messageBox({
          message: '1234'
        })
          .then(() => {
            console.log(1)
          })
          .catch(() => {
            console.log(2)
          })
      },
      toast () {
        Toast('123')
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>

