<template>
  <div class="wxf-progress">
    <div class="wxf-progress-bar">
      <div class="wxf-progress-bar-outer">
        <div class="wxf-progress-bar-inner" :style="{ width: percentage + '%'}">
          <!-- <div class="wxf-progress-bar-inner-text">{{percentage}}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wxf-progress',
    props: {
      percentage: {
        type: Number
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wxf-progress-bar {
    width: 100%;
    height: .4rem;
    border-radius: .2rem;
  }
  .wxf-progress-bar-outer {
    width: 100%;
    height: 100%;
    background: #ccc;
    border-radius: .2rem;
  }
  .wxf-progress-bar-inner {
    display: flex;
    align-items: center;
    height: 100%;
    border-radius: .2rem;
    transition: width .2s ease;
    background: green;
  }
  .wxf-progress-bar-inner-text {
   font-size: .24rem;
   line-height: 1; 
  }
</style>

