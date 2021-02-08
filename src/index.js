import './assets/scss/index.scss'
import 'bootstrap'

document.addEventListener('DOMContentLoaded', function () {
  const $menu = $('#menu')
  const $productsList = $('.products-list')
  const $toggleMenuButton = $('#toggleMenuButton')

  // document ready
  $toggleMenuButton.on('click', function (event) {
    event.preventDefault()
    setHumberMenuDisplay()
  })

  function setHumberMenuDisplay () {
    if ($menu.hasClass('menu--show')) {
      $toggleMenuButton.removeClass('humber-button--active')
      $menu.removeClass('menu--show')
    } else {
      $toggleMenuButton.addClass('humber-button--active')
      $menu.addClass('menu--show')
    }
  }

  // feature area
  $('.feature-list__collapse-content')
    .on('show.bs.collapse', function () {
      $(this).parent().find('.feature-list__collapse-header').addClass('feature-list__collapse-header--active')
    })
    .on('hide.bs.collapse', function () {
      $(this).parent().find('.feature-list__collapse-header').removeClass('feature-list__collapse-header--active')
    })

  // book a demo button click
  $('[id^=bookDemo_]').on('click', clickBookDemo)

  // products option list
  $('.ngchat-navbar__menu-item--products').on('click', function () {
    $(this).find('.item-product-name').toggleClass('show')
    $productsList.toggleClass('show')
  })

  document.addEventListener('click', function (event) {
    const $target = $(event.target)
    if ($productsList.hasClass('show') && !($target.is('[class^=products-list__]') || $target.hasClass('ngchat-navbar__menu-item--products') || $target.hasClass('item-product-name'))) $productsList.removeClass('show')
    if ($target.is('[class^=menu__products-list--]')) setHumberMenuDisplay()
  })
})

const demoUrl = [
  'https://forms.gle/RdNoQYseQ8DVpTu66',
  'https://share.hsforms.com/1mqJbPiylRJuIP6VMo-n1DQ5jwqm'
]
function clickBookDemo () {
  const randomIndex = Math.floor(Math.random() * 2)
  const bookDemoLink = demoUrl[randomIndex]
  window.open(bookDemoLink)
}
