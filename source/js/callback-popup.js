'use strict';

(function () {
  $(window).on('resize', function () {
    let win = $(this);
    if (win.width() > 769 && !$('.form-callback').hasClass('lightSpeedIn')) {
      $('.form-callback').addClass('lightSpeedIn');
    }
  });

  $(document).ready(function () {

    let winWidth = $(this);
    if (winWidth.width() > 769 && !$('.form-callback').hasClass('lightSpeedIn')) {
      $('.form-callback').addClass('lightSpeedIn');
    }

    $('.callback-btn-js').click(function () {
      $('.popup-overlay').addClass('popup-overlay--open');
      if ($(window).width() < 769 && $('.form-callback').hasClass('lightSpeedIn')) {
        $('.form-callback').removeClass('lightSpeedIn');
      }
    });

    $('.btn-close-form-js').click(function () {
      $('.popup-overlay').removeClass('popup-overlay--open');
      $('.form-callback').trigger('reset');
      $('.btn-callback-js').attr('disabled', 'disabled');
    });

    $(document).keydown(function (evt) {
      if (evt.which === 27) {
        $('.popup-overlay').removeClass('popup-overlay--open');
        $('.form-callback').trigger('reset');
        $('.btn-callback-js').attr('disabled', 'disabled');
      }
    });

    $('.popup-overlay').click(function (evt) {
      if (evt.target === this) {
        $('.popup-overlay').removeClass('popup-overlay--open');
        $('.form-callback').trigger('reset');
        $('.btn-callback-js').attr('disabled', 'disabled');
      }
    });

    $('#checkbox-input').click(function () {
      if ($(this).is(':checked')) {
        $('.btn-callback-js').removeAttr('disabled');
      } else {
        $('.btn-callback-js').attr('disabled', 'disabled');
      }
    });
  });
})();
