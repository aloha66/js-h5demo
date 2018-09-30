require('src/index.html')
require('src/css/package.scss')

require('swiper/dist/css/swiper.css')
require('swiper/dist/js/swiper.js')


import "./p2.js"

var Preloader = require('preloader.js')

const arr = [,0.004,57]


/**
 * init
 */
function init () {
  var mySwiper = new Swiper('#o2_swiper', {
    direction: 'vertical'
  })

  var maya = new Swiper('#maya',{direction : 'horizontal'})

  mySwiper.on('transitionEnd', function (e) {
    if(e.activeIndex === 1) {
      var el = document.querySelector('.p2 .num');
      var demo = new CountUp(el,100,arr[e.activeIndex],3);
      if(!demo.error) {
        demo.start()
      } else {
        console.error(demo.error)
      }
    } else if(e.activeIndex === 2) {
      var el = document.querySelector('.p3 .num');
      var demo = new CountUp(el,0,arr[e.activeIndex]);
      if(!demo.error) {
        demo.start()
      } else {
        console.error(demo.error)
      }
    } else if(e.activeIndex === 3) {
      debugger
    }

 
  });
}

/**
 * preloader && start
 */
var preloader = new Preloader({
  resources: [],
  perMinTime: 1000 // 加载每个资源所需的最小时间，一般用来测试 loading
})
preloader.addProgressListener(function (loaded, length) {
  console.log('loaded', loaded, length, loaded / length)
})
preloader.addCompletionListener(function () {
  $('#o2_loading').remove()
  $('#o2_main').removeClass('hide')

  init()
})
preloader.start()

