import './assets/scss/index.scss'
import 'bootstrap'

document.addEventListener('DOMContentLoaded', function () {
  // document ready
  $(document).on('click', '#toggleMenuButton', function (event) {
    event.preventDefault()
    const $toggleMenuButton = $(this)
    const $menu = $('#menu')
    if ($menu.hasClass('menu--show')) {
      $toggleMenuButton.removeClass('humber-button--active')
      $menu.removeClass('menu--show')
    } else {
      $toggleMenuButton.addClass('humber-button--active')
      $menu.addClass('menu--show')
    }
  })
  $(document).on('click', '#openCalendlyModal', function (event) {
    event.preventDefault()
  })

  const $label = $('.ngchat-select').find('.ngchat-select__label')
  const $select = $('.ngchat-select').find('select')
  $label.text($select.find('option:selected').text())
  $(document).on('change', '.ngchat-select > select', function (event) {
    $(this).parent().find('.ngchat-select__label').text($(this).find('option:selected').text())
  })
})
