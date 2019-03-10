<template>
  <div class="wrapper">

    <button type="button" @click="isShowCard = !isShowCard">Toggle Card Layer</button>

    <button type="button" @click="isShowRotateCardLayer = !isShowRotateCardLayer">
      Toggle Rotate Card Layer
    </button>

    <card-layer 
      :isShow.sync="isShowCard"
      @afterLeave="queneNext"></card-layer>
    <rotate-card-layer
      :isShow.sync="isShowRotateCardLayer"
      @afterLeave="queneNext">
    </rotate-card-layer>
  </div>
</template>

<script>
  import CardLayer from './components/card-layer/card-layer.vue'
  import RotateCardLayer from './components/rotate-card-layer/rotate-card-layer.vue'
  export default {
    name: 'card-page',
    components: {
      CardLayer,
      RotateCardLayer
    },
    data () {
      return {
        isShowCard: false,
        isShowRotateCardLayer: false,
        quene: []
      }
    },
    created () {
      class Quene {
        constructor () {
          this.taskList = []
        }
        push (fn) {
          this.taskList.push(fn)
          return this
        }
        start () {
          let taskList = this.taskList
          if (taskList.length > 0) {
            taskList.shift()()
          }
          return this
        }
        next () {
          let taskList = this.taskList
          if (taskList.length > 0) {
            taskList.shift()()
          }
          return this
        }
      }
      this.quene = new Quene()
      this.quene.push(() => {
        this.isShowCard = true
      })
      .push(() => {
        this.isShowRotateCardLayer = true
      })

    },
    mounted () {
      this.quene.start()
    },
    methods: {
      queneNext () {
        console.log('test')
        this.quene.next()
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>

