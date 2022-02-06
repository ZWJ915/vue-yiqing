<template>
  <div class="info">
    <div class="cov">
      <div class="title">
        病毒信息
      </div>
      <p>{{ covDesc.note1 }}</p>
      <p>{{ covDesc.note2 }}</p>
      <p>{{ covDesc.note3 }}</p>
      <p>{{ covDesc.remark1 }}</p>
      <p>{{ covDesc.remark2 }}</p>
      <p>{{ covDesc.remark3 }}</p>
    </div>
    <!-- 疫情热点 -->
    <div class="hot">
      <div class="title">
        <img
          src="../../../assets/imgs/hot.png"
          width="80px"
          alt="疫情热点"
        >
      </div>
      <ul>
        <li
          v-for="item in news"
          :key="item.id"
        >
          <div class="hot_item">
            <div
              class="hot_tag"
            >
              最新
            </div>
            <span>{{ item.title }}</span>
          </div>
          <img src="data:image/png;base64,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">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CovInfo',
  props: {
    covDesc: {
      type: Object,
      default() {
        return {};
      },
    },
    news: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.info {
  padding: 0.2rem;
  .cov {
    p {
      line-height: 0.5rem;
    }
  }
  .title {
    display: flex;
    font-size: .4rem;
    font-weight: bold;
    border-left: 0.08rem solid #4169e2;
    padding-left: 0.1rem;
    margin-bottom: 0.1rem;
  }
  .hot {
    margin-top: 0.12rem;
    ul {
        .hot_item {
          width: 90%;
          .hot_tag {
            display: inline-block;
            height: 0.36rem;
            text-align: center;
            line-height: 0.36rem;
            background: #f74c31;
            border-radius: 0.08rem;
            padding: 0 0.1rem;
            color: #fff;
            margin-right: 0.12rem;
            font-size: .11rem
          }
      }
      img {
        width: 0.3rem;
        height: 0.3rem;
      }
      li {
        display: flex;
        align-items: center;
        margin-bottom: .2rem;
        justify-content: space-between;
      }
    }
  }
  .hot::after {
      display: block;
      height: 0.01rem;
      background: #ebebeb;
      content: "";
    }
}
</style>