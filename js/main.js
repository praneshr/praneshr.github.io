var circleArray = []
var viewportHeight = window.innerHeight
var viewportWidth = window.innerWidth

var colorArray = [
  '#D53939',
  '#90D26D',
  '#FFEA85',
  '#DBE2EF',
  '#2A363B',
  '#53354A',
]

function randomString(len, charSet) {
    charSet = charSet || 'abcdefghijklmnopqrstuiwxyz& ';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

function setBannerViewPort() {
  $('.vetti-scene').height(window.innerHeight)
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomCircle() {
  if (circleArray.length > 3) {
    removableNode = circleArray.splice(0, 1)[0]
    $('#' + removableNode).remove()
  }
  var id = (+new Date).toString(36) + Math.random().toString(36).slice(2, 7)
  circleArray.push(id)
  $('.vetti-scene')
    .append('<div class="rangoli-vattam" id="' + id + '"></div>')
  window.setTimeout(function () {
    const posX = getRandom(0, viewportWidth)
    const posY = getRandom(0, viewportHeight)
    $('#'+id).css({
      left: posX + 'px',
      top: posY + 'px',
      height: viewportHeight * 2,
      width: viewportHeight * 2,
      'background-color': colorArray[getRandom(0, colorArray.length - 1)],
      transform: 'scale3d(3, 3, 3)',
    })
  }, 100)

  window.setTimeout(randomCircle, 10000)
}
function loading() {
  var randomStr = randomString(12)
  var randomStr2 = randomString(34)
  $('.peru').text(randomStr)
  $('.seira-vela').text(randomStr2)
}
$(document).ready(function () {
  setBannerViewPort()
  $('body').css('overflow', 'hidden')
  $(window).resize(setBannerViewPort)
  var id = window.setInterval(loading, 200)
  window.setTimeout(function () {
    window.clearInterval(id)
    $('.peru').text('Pranesh Ravi')
    $('.seira-vela').text('UI designer & Javascript Developer')
    $('body').css('overflow', 'auto')
    window.setTimeout(randomCircle, 1000)
  }, 7000)

  var top = $('header').offset().top
  $(document).scroll(function () {
    var scrollTop = $(document).scrollTop()
    if (scrollTop >= top) {
      $('header').addClass('kuda-poo')
    } else {
      $('header').removeClass('kuda-poo')
    }
  })
})