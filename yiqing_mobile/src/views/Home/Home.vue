<template>
  <div class="home">
    <img
      src="../../assets/imgs/head.png"
      width="100%"
    >
    <cov-info
      :cov-desc="covDesc"
      :news="news"
    />
    <!-- 疫情导航 -->
    <div class="list">
      <div class="list_item">
        <router-link
          to="/riskarea"
          tag="div"
        >
          <img src="../../assets/imgs/inquiry.png">
          <div>风险地区</div>
        </router-link>
      </div>
      <div class="list_item">
        <router-link
          to="/check"
          tag="div"
        >
          <img src="../../assets/imgs/check.png">
          <div>核酸检测</div>
        </router-link>
      </div>
      <div class="list_item">
        <router-link
          to="/goods"
          tag="div"
        >
          <img src="../../assets/imgs/goods.png">
          <div>防疫物资</div>
        </router-link>
      </div>
      <div class="list_item">
        <img src="../../assets/imgs/policy.png">
        <div>出行政策</div>
      </div>
    </div>
    <!-- 数据统计 -->
    <cov-data
      :cov-data="covData"
    />
    <!-- 国内疫情地图 -->
    <cov-map />
  </div>
</template>

<script>
import CovInfo from '@/views/Home/CovInfo/CovInfo.vue';
import CovData from '@/views/Home/CovInfo/CovData.vue';
import CovMap from '@/views/CovMap/index.vue';
import api from '@/api/index';
export default {
  name: 'Home',
  components: {
    CovInfo,
    CovData,
    CovMap,
  },
  data() {
    return {
      covDesc: {},
      news: [], // 疫情热点
      covData: {}, // 国内疫情统计
    };
  },
  created() {
    api.getCovInfo().then(res => {
      const data = res.data.newslist[0];
      const {note1, note2, note3, remark1, remark2, remark3, currentConfirmedCount, confirmedCount, suspectedCount, seriousCount, deadCount, curedCount, currentConfirmedIncr, suspectedIncr, seriousIncr, yesterdayConfirmedCountIncr, deadIncr, curedIncr, modifyTime} = data.desc;
      this.covDesc = {
        note1,
        note2,
        note3,
        remark1,
        remark2,
        remark3,
      };
      this.news = data.news;
      this.covData = {
        currentConfirmedCount,
        currentConfirmedIncr,
        confirmedCount,
        suspectedCount,
        suspectedIncr,
        seriousCount,
        seriousIncr,
        deadCount,
        curedCount,
        yesterdayConfirmedCountIncr,
        deadIncr,
        curedIncr,
        modifyTime,
      };
    });
  },
};
</script>
<style lang="scss" scoped>
.list {
  display: flex;
  padding: .2rem 0;
  .list_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    text-align: center;
    justify-content: center;
    img {
      width: 40px;
    }
  }
}
</style>
