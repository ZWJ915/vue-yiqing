# yiqing_mobile

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### swiper使用
1. vue2 参考网址 https://github.com/surmon-china/vue-awesome-swiper
2. 安装 npm install swiper@5.x vue-awesome-swiper --save
3. main.js 导入文件
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
4. 组件使用
    <template>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </template>
  ...and so on
  ```