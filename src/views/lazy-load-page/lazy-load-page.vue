<template>
  <div id="scroller" class="wrapper">
    <div class="container">
      <item 
        v-for="(item, index) in cards" 
        :item="item"
        :index="index"
        :key="index"></item>
    </div>
    <div></div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { fetchList } from './api'
  import Item from './components/item/item.vue'
  export default {
    name: 'lazy-load-page',
    components: {
      Item
    },
    data () {
      return {
        scroller: '',
        cardListInfo: null,
        cards: [],
        page: 1
      }
    },
    created () {
      this.fetchList()
    },
    mounted () {

    },
    update () {
      console.log('update')
    },
    methods: {
      fetchList (page = 1) {
        let params = {
          containerId: '102803_ctg1_5088_-_ctg1_5088',
          sinceId: page,
          openApp: 0
        }
        fetchList(params)
          .then(res => {
            // this.cardListInfo = res.data.data.cardlistInfo
            if (!this.scroller) {
              this.$nextTick(() => {
                this.scroller = new BScroll('#scroller', {
                  pullUpLoad: true
                })
                this.scroller.on('pullingUp', () => {
                  console.log('pullingUp')
                  this.page++
                  this.fetchList(this.page)
                })
              })
            } else {
              this.scroller.refresh()
              this.scroller.finishPullUp()
            }
            this.cards = this.cards.concat(res.data.data.cards)
          })
          .catch(err => {
            console.log(err.message)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    height: 5rem;
  }
</style>
