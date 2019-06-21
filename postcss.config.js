// https://github.com/youzan/vant/issues/1181
// https://segmentfault.com/q/1010000017014603
module.exports = ({ file }) => {
  let vwUnit // 判断条件 请自行调整
  if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
    vwUnit = 375
  } else {
    vwUnit = 750
  }
  return {
    plugins: [
      require('postcss-aspect-ratio-mini')(),
      require('postcss-cssnext')(),
      require('postcss-px-to-viewport')({
        viewportWidth: vwUnit, // (Number) The width of the viewport.
        viewportHeight: 1334, // (Number) The height of the viewport.
        unitPrecision: 5, // (Number) The decimal numbers to allow the REM units to grow to.
        viewportUnit: 'vw', // (String) Expected units.
        // 该项仅在使用 Circle 组件时需要
        // 原因参见 https://github.com/youzan/vant/issues/1948
        selectorBlackList: ['.ignore', '.hairlines', 'van-circle__layer'], // (Array) The selectors to ignore and leave as px.
        minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
        mediaQuery: false // (Boolean) Allow px to be converted in media queries.
      }),
      require('postcss-viewport-units')({
        silence: true
      })
    ]
  }
}
