(function (doc, win) {
  let docE1 = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      //  js获取当前设备大小
      let clientWidth = docE1.clientWidth; //获取设备宽度
      if (!clientWidth) return;
      if (clientWidth >= 750) {
        // 宽度>750 平板或者桌面
        docE1.style.fontSize = '100px'; //根元素
      } else {
        // 移动端的适配
        docE1.style.fontSize = 100 * (clientWidth / 750) + 'px';
      }
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);