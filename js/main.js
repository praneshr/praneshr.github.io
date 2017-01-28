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
$(window).on('load', function () {
  setBannerViewPort()
  $(window).resize(setBannerViewPort)
  $('.percentage-container').addClass('no-width')
  setTimeout(function () {
    window.clearInterval(id)
    $('.peru').text('Pranesh Ravi')
    $('.seira-vela').text('UI designer & Full-Stack developer')
    $('body').css('overflow', 'auto')
    $('.rendu').css('display', 'block')
    $('.down').css('opacity', 1)
    window.setTimeout(randomCircle, 1000)
  }, 1500)

  $(document).scroll(function () {
    var imgOffset = $('.enaku-therunjathu>h2').offset().top
    var scroll = $(document).scrollTop()
    var hasClass = $('.percentage-container').hasClass('no-width')
    if (imgOffset < (scroll + (window.innerWidth > 1200 ? 350 : 150))) {
      $('.percentage-container').removeClass('no-width')
    }
  })

  if (window.navigator.platform.match(/win/ig)) {
    $('body').addClass('windows')
  }
})