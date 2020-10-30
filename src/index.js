import './assets/scss/index.scss'
import 'bootstrap'
import 'jquery-validation'

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
    if ($('form').valid()) {
      $("#calendlyModal").modal('show')
    }
  })

  const $label = $('.ngchat-select').find('.ngchat-select__label')
  const $select = $('.ngchat-select').find('select')
  $label.text($select.find('option:selected').text())
  $(document).on('change', '.ngchat-select > select', function (event) {
    $(this).parent().find('.ngchat-select__label').text($(this).find('option:selected').text())
  })

  $('#userForm').validate({
    rules: {
      name: {
        required: true
      },
      country: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: '*Please enter a name.'
      },
      country: {
        required: '*Please select a country.'
      },
      email: {
        required: '*Please enter a valid company email.',
        email: '*Please enter a valid company email.'
      }
    },
    errorPlacement: function (error, element) {
      if (element.attr('name') === 'country') {
        error.insertAfter(element.parent())
      } else {
        error.insertAfter(element)
      }
    },
    highlight: function (element, errorClass) {
      $(element).removeClass(errorClass)
    },
    errorClass: 'error-message',
    errorElement: 'span',
    onkeyup: function (element) { $(element).valid() },
    submitHandler: function (form) {
      // some other code
      // maybe form submit or ajax
    }
  })
  $('select').on('change', function () {
    $('form').validate().element('select')
  })
})
