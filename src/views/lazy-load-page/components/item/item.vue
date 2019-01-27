<template>
  <div class="item-wrap">
    <div class="header">
      <div class="user">
        <span>{{index}}</span>
        <img class="avatar" :src="item.mblog.user.avatar_hd" />
        <span class="name">{{item.mblog.user.screen_name}}</span>
      </div>
    </div>
    <div class="main">
      <img class="pic"
        v-for="(pic, index) in item.mblog.pics" 
        :src="pic.url"
        :key="index" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'item',
    props: {
      item: Object,
      index: Number
    }
  }
</script>

<style lang="scss" scoped>
  .item-wrap {
    margin: .4rem 0;
    font-size: .28rem;
    background: #eee;
  }
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 1.4rem;
    .user {
      display: flex;
      align-items: center;
      .avatar {
        display: block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }
      .name {
        margin: 0 0 0 .2rem;
      }
    }
  }
  .main {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .pic {
      width: 4rem;
      margin: .4rem;
    }
  }
</style>
