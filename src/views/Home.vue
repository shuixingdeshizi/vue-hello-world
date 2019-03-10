<template>
  <div class="home">
    Home
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      percentage: 50
    }
  },
  mounted () {
    setTimeout(() => {
      this.percentage = 80
    }, 3000)
  },
  methods: {

  }
}
</script>
