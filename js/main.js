var circleArray = []
var viewportHeight = window.innerHeight
var viewportWidth = window.innerWidth

var colorArray = [
  '#3C3B5C',
  '#D53939',
  '#616EEF',
  '#7F4A88',
  '#F6378F',
  '#26C6D0',
  '#90D26D',
  '#FFEA85',
  '#EA7362',
  '#9E579D',
]

function setBannerViewPort() {
  $('.banner').height(viewportHeight)
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
  $('.banner')
    .append('<div class="circle" id="' + id + '"></div>')
  window.setTimeout(function () {
    const posX = getRandom(0, viewportWidth)
    const posY = getRandom(0, viewportHeight)
    $('#'+id).css({
      left: posX + 'px',
      top: posY + 'px',
      height: viewportHeight * 2,
      width: viewportHeight * 2,
      'background-color': colorArray[getRandom(0, colorArray.length - 1)],
      transform: 'scale(3)',
    })
  }, 100)

  window.setTimeout(randomCircle, 10000)
}

$(document).ready(function () {
  setBannerViewPort()

  $(window).resize(setBannerViewPort)
  window.setTimeout(randomCircle, 3000)

})