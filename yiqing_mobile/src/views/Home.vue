<template>
  <div class="home">
    <img
      src="../assets/imgs/head.png"
      width="100%"
    >
    <cov-info />
  </div>
</template>

<script>
import CovInfo from '@/views/CovInfo/CovInfo.vue';
export default {
  name: 'Home',
  components: {
    CovInfo,
  },
};
</script>
<style lang="scss" scoped>
  .box {
    width: 2rem;
    height: 2rem;
    background: palevioletred
  }
</style>
