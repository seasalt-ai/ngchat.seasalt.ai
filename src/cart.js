import './assets/scss/cart.scss'
import 'slick-carousel'

document.addEventListener('DOMContentLoaded', function () {
  const currentYear = new Date().getFullYear()
  const nextYear = currentYear + 1
  const copyRightYear = `${currentYear}-${nextYear}`
  $('#year').text(copyRightYear)

  const $carouselDotsItem = $('.carousel-dots > li')
  const $carouselItems = $('.carousel-area .carousel-area-item')

  $carouselDotsItem.on('click', function () {
    const selectedIndex = $(this).attr('tabIndex')
    $carouselDotsItem.removeClass('carousel-active')
    $(this).addClass('carousel-active')

    $carouselItems.removeClass('active')
    $($carouselItems[selectedIndex]).addClass('active')
  })

  $carouselItems.on('click', function () {
    const selectedIndex = $(this).attr('tabIndex')
    $carouselItems.removeClass('active')
    $(this).addClass('active')
    $carouselDotsItem.removeClass('carousel-active')
    $($carouselDotsItem[selectedIndex]).addClass('carousel-active')
  })
})
