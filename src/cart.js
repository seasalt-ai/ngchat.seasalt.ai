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

  function scrollToCarousel (currentIndex) {
    const scrollPosition = $carouselItems[currentIndex].offsetTop - screen.height / 2
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
  }

  $carouselDotsItem.on('click', function () {
    const selectedIndex = $(this).attr('tabIndex')
    scrollToCarousel(selectedIndex)
  })

  $carouselItems.on('click', function () {
    const selectedIndex = $(this).attr('tabIndex')
    scrollToCarousel(selectedIndex)
  })

  window.addEventListener('scroll', function (e) {
    const $carouselItem0 = $carouselItems[0].offsetTop
    const $carouselItem1 = $carouselItems[1].offsetTop
    const $carouselItem2 = $carouselItems[2].offsetTop
    const targetHeight = this.scrollY + screen.height / 2

    if (targetHeight >= $carouselItem0 && targetHeight < $carouselItem1) {
      if (!$($carouselItems[0]).hasClass('active')) switchCarousel(0)
    } else if (targetHeight >= $carouselItem1 && targetHeight < $carouselItem2) {
      if (!$($carouselItems[1]).hasClass('active')) switchCarousel(1)
    } else if (targetHeight >= $carouselItem2) {
      if (!$($carouselItems[2]).hasClass('active')) switchCarousel(2)
    } else if ($carouselItems.hasClass('active')) {
      $carouselItems.removeClass('active')
      $carouselDotsItem.removeClass('carousel-active')
    }
  })
})
