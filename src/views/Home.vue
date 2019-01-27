<template>
  <div class="home">
    <wxf-progress :percentage="percentage"></wxf-progress>
  </div>
</template>

<script>
class Quene {
  constructor (name) {
    this.taskList = []
    this.taskList.push({delay: 0, fn: () => {
      console.log(name)
    }})
    // window.requestAnimationFrame(this.start.bind(this))
    setTimeout(this.start.bind(this), 0)
  }
  eat () {
   this.taskList.push({delay: 3000, fn: () => {
     console.log('eat')
   }})
   return this 
  }
  sheep () {
    this.taskList.push({delay: 5000, fn: () => {
      console.log('sheep')
    }})
    return this
  }
  sheepAfter () {
    this.taskList.unshift({
      delay: 1000,
      fn: () => {
        console.log('sheepAfter')
      }
    })
    return this
  }
  async start () {
    console.log(this.taskList)
    for(let i = 0, len = this.taskList.length; i < len; i++) {
      let task = this.taskList[i]
      await new Promise((resolve) => {
        setTimeout(() => {
          task.fn()
          resolve()
        }, task.delay)
      })
    }
  }
}

let quene = new Quene('layzman')

quene.eat(1000, () => {
  console.log(1)
})
.sheep(3000, () => {
  console.log(2)
})
.eat(5000, () => {
  console.log(3)
})
.sheepAfter(3000)


import { WxfProgress } from '@/components/common'

export default {
  name: 'home',
  components: {
    WxfProgress
  },
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
