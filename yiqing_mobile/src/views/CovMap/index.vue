<template>
  <div>
    <div
      class="title"
    >
      国内疫情地图
    </div>
    <van-tabs
      v-model="active"
      animated
      @change="change"
    >
      <van-tab title="现存确诊">
        <div
          id="nowMain"
          style="width: 7rem;height: 8rem;"
        />
      </van-tab>
      <van-tab title="累计确诊">
        <div
          id="main"
          style="width: 7rem;height: 8rem;"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import api from '@/api/index';

export default {
  name: 'CovMap',
  data() {
    return {
      active: 0,
      confirmArr: [],
    };
  },
  mounted() {
    api.getChinaData().then(res => {
      const nowArr = [], conArr = [];
      for (const key in res.data.retdata) {
        const {confirm, xArea, curConfirm} = res.data.retdata[key];
        nowArr.push({
          name: xArea,
          value: confirm,
        });
        conArr.push({
          name: xArea,
          value: curConfirm,
        });
      }
      this.confirmArr = conArr;
      this.$nextTick(() => {
        // 现存确诊
        this.$myChart.chinaMap('nowMain', nowArr);
      });
    });
  },
  methods: {
    change(title) {
      // 累计确诊
      if (title === 1) {
        this.$nextTick(() => {
          this.$myChart.chinaMap('main', this.confirmArr);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>