/**
 * 请求的接口
 */
import axios from 'axios';
// 接口地址
import base from './base';
import md5 from 'md5-js';
// 请求方法
const api = {
  /**
   * 病毒信息获取
   */
  getCovInfo() {
    return axios.get(base.txBase.host + base.txBase.covInfo);
  },
  // 全国疫情数据
  getChinaData() {
    console.log(md5('12312'));
    return axios.get(base.wBase.host + base.wBase.chinaData);
  },
};

export default api;