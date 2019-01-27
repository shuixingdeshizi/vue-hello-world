<template>
  <div class="wrapper">

    <button type="button" @click="isShowCard = !isShowCard">Toggle Card Layer</button>

    <button type="button" @click="isShowRotateCardLayer = !isShowRotateCardLayer">
      Toggle Rotate Card Layer
    </button>

    <card-layer 
      :isShow.sync="isShowCard"></card-layer>
    <rotate-card-layer
      :isShow.sync="isShowRotateCardLayer">
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
        isShowRotateCardLayer: true
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>

