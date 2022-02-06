/**
 * 将echarts开发成插件
 * object.defineProperties(obj, props)
 * 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象
 * obj 在其上定义或修改属性的对象
 * props 要定义其可枚举属性或修改的属性描述符的对象
 */
import echarts from 'echarts';
// 导入地图的js文件
import 'echarts/map/js/china';

const install = function(Vue, options) {
  console.log(options);
  Object.defineProperties(Vue.prototype, {
    $myChart: {
      get() {
        return {
          // 折线图
          line(id) {
            // 基于准备好的dom，初始化echarts实例
            const myChart = echarts.init(document.getElementById(id));

            // 指定图表的配置项和数据
            const option = {
              title: {
                text: 'ECharts 入门示例',
              },
              tooltip: {},
              legend: {
                data: ['销量'],
              },
              xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
              },
              yAxis: {},
              series: [
                {
                  name: '销量',
                  type: 'line',
                  data: [5, 20, 36, 10, 10, 20],
                },
              ],
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
          },
          // 中国地图
          chinaMap(id, data) {
            const myChart = echarts.init(document.getElementById(id));
            const option = {
              tooltip: {
                triggerOn: 'click', // 提示框触发的条件
                enterable: true, // 鼠标是否可进入提示框浮层中，默认false
                formatter(item) {
                  // item=下面serves里的data里的每一项
                  return `${item.name + item.value}`;
                },
              },
              visualMap: [{ // 映射高亮颜色
                orient: 'horizontal', // 水平
                type: 'piecewise', // 离散
                itemWidth: 16,
                itemHeight: 10,
                bottom: 0,
                pieces: [ // 配置颜色区间
                  {
                    min: 0,
                    max: 0,
                    color: '#FFF',
                  },
                  {
                    min: 1,
                    max: 100,
                    color: '#FDFDCF',
                  },
                  {
                    min: 100,
                    max: 1000,
                    color: '#FE9E83',
                  },
                  {
                    min: 1000,
                    max: 5000,
                    color: '#E55A4E',
                  },
                  {
                    min: 5000,
                    color: '#4F070D',
                  },
                ],
              }],
              series: [{
                name: '省',
                type: 'map',
                map: 'china',
                roam: false,
                zoom: 1.2,
                aspectScale: 0.75,
                top: 40,
                layoutCenter: ['5%', '5%'],
                label: {
                  normal: {
                    show: true,
                    testStyle: {
                      fontSize: 8,
                    },
                  },
                },
                itemStyle: {
                  normal: {
                    areaColor: 'rgba(0,255,236,0)',
                    borderColor: 'rgba(0,0,0,0.2)',
                  },
                  emphasis: { // 选中的区域颜色及阴影效果等
                    areaColor: 'rgba(255,180,0,0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                  },
                },
                data,
              }],
            };
            myChart.setOption(option);
          },
        };
      },
    },
  });
};

export default install;