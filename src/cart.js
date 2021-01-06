import './assets/scss/cart.scss'
import 'slick-carousel'

document.addEventListener('DOMContentLoaded', function () {
  const currentYear = new Date().getFullYear()
  const copyRightYear = `2021-${currentYear}`
  $('#year').text(copyRightYear)

  const $carouselDotsItem = $('.carousel-dots > li')
  const $carouselItems = $('.carousel-area .carousel-area-item')

  function switchCarousel (currentIndex) {
    $carouselItems.removeClass('active')
    $($carouselItems[currentIndex]).addClass('active')
    $carouselDotsItem.removeClass('carousel-active')
    $($carouselDotsItem[currentIndex]).addClass('carousel-active')
  }

  // $carouselDotsItem.on('click', function () {
  //   const selectedIndex = $(this).attr('tabIndex')
  //   switchCarousel(selectedIndex)
  // })

  // $carouselItems.on('click', function () {
  //   const selectedIndex = $(this).attr('tabIndex')
  //   switchCarousel(selectedIndex)
  // })

  window.addEventListener('scroll', function (e) {
    if (this.scrollY > 800 && this.scrollY < 1090) {
      if (!$($carouselItems[0]).hasClass('active')) switchCarousel(0)
    } else if (this.scrollY >= 1090 && this.scrollY < 1400) {
      if (!$($carouselItems[1]).hasClass('active')) switchCarousel(1)
    } else if (this.scrollY >= 1400) {
      if (!$($carouselItems[2]).hasClass('active')) switchCarousel(2)
    } else if ($carouselItems.hasClass('active')) {
      $carouselItems.removeClass('active')
      $carouselDotsItem.removeClass('carousel-active')
    }
  })
})
