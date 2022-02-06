/**
 * 公共请求的接口
 */
const base = {
  txBase: {
    host: 'http://api.tianapi.com', // 天行数据
    covInfo: '/ncov/index?key=5873976bd523f2e1bf534c135a0aabb5', // 疫情病毒信息
  },
  wBase: {
    host: 'https://uaqy.api.storeapi.net', // 挖数据
    chinaData: '/api/94/219?format=json&appid=13895&sign=783efeee5b515d63e9ac2f5a410d3eec', // 国内疫情数据
  },
};

export default base;