<template>
  <div
    class="data"
  >
    <div
      class="content"
    >
      <div
        class="title"
      >
        <span>截至北京时间{{ covData.modifyTime }}</span>
      </div>
      <ul class="wrap">
        <li>
          <span>较昨日<span :class="covData.currentConfirmedIncr === 0 ? '' : 'fcolor'">{{ covData.currentConfirmedIncr | plusMinusData }}</span></span>
          <div
            class="bold fcolor"
          >
            {{ covData.currentConfirmedCount | toLocaleString }}
          </div>
          <strong>现存确诊</strong>
        </li>
        <li>
          <span>较昨日<span :class="covData.suspectedIncr === 0 ? '' : 'fcolor'">{{ covData.suspectedIncr | plusMinusData }}</span></span>
          <div
            class="bold fcolor"
          >
            {{ covData.suspectedCount | toLocaleString }}
          </div>
          <strong>境外输入</strong>
        </li>
        <li>
          <span>较昨日<span :class="covData.seriousIncr === 0 ? '' : 'fcolor'">{{ covData.seriousIncr | plusMinusData }}</span></span>
          <div
            class="bold fcolor"
          >
            {{ covData.seriousCount | toLocaleString }}
          </div>
          <strong>现存无症状</strong>
        </li>
        <li>
          <span>较昨日<span :class="covData.yesterdayConfirmedCountIncr === 0 ? '' : 'fcolor'">{{ covData.yesterdayConfirmedCountIncr | plusMinusData }}</span></span>
          <div
            class="bold fcolor"
          >
            {{ covData.confirmedCount | toLocaleString }}
          </div>
          <strong>累计确诊</strong>
        </li>
        <li>
          <span>较昨日<span :class="covData.deadIncr === 0 ? '' : 'fcolor'">{{ covData.deadIncr | plusMinusData }}</span></span>
          <div
            class="bold fcolor"
          >
            {{ covData.deadCount | toLocaleString }}
          </div>
          <strong>累计死亡</strong>
        </li>
        <li>
          <span>较昨日<span :class="covData.curedIncr === 0 ? '' : 'fcolor'">{{ covData.curedIncr | plusMinusData }}</span></span>
          <div
            class="bold fcolor"
          >
            {{ covData.curedCount | toLocaleString }}
          </div>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CovData',
  filters: {
    plusMinusData(val) {
      return val > 0 ? `+${val}` : val === 0 ? '无变化' : val;
    },
    // 将数字转成千分位格式（123223=>123,223）
    toLocaleString(val) {
      if (val === undefined) return '';
      return val.toLocaleString();
    },
  },
  props: {
    covData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.data {
  background: #f5f5f5;
  padding-top: 0.2rem;
  .content {
    padding: 0.2rem;
    min-height: 2rem;
    background: #fff;
    border-radius: 0.2rem 0.2rem 0 0;
    .title {
      color: #666;
      margin-bottom: 0.12rem;
    }
    .bold {
      font-weight: bold;
    }
    .wrap {
      display: flex;
      flex-wrap: wrap;
      border: 0.01rem solid #ebebeb;
      border-radius: 0.08rem;
      box-shadow: 0 0.04rem 0.12rem 0 rgb(0 0 0 / 5%);
      padding-top: 0.2rem;
      li {
        width: 33.3333%;
        text-align: center;
        margin-bottom: 0.2rem;
        .bold {
          font-size: .4rem;
        }
      }
      li:nth-child(1) {
        .bold {
          color: rgb(247, 76, 49);
        }
      }
      li:nth-child(2) {
        .fcolor {
          color: rgb(247, 130, 7);
        }
      }
      li:nth-child(3) {
        .fcolor {
          color: rgb(162, 90, 78);
        }
      }
      li:nth-child(4) {
        .fcolor {
          color: rgb(174, 33, 44);
        }
      }
      li:nth-child(5) {
        .fcolor {
          color: rgb(93, 112, 146);
        }
      }
      li:nth-child(6) {
        .fcolor {
          color: rgb(40, 183, 163);
        }
      }
    }
  }
}
</style>