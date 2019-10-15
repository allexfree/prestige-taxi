'use strict';

(function () {

  $(document).ready(function () {
    $('.callback-btn-js').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '.input-name-js',
      callbacks: {
        beforeOpen: function () {
          $('.form-callback.mfp-hide').trigger('reset');
          $('.btn-callback-js').attr('disabled', 'disabled');

          if ($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '.input-name-js';
          }

          if ($(window).width() < 769 && $('.form-callback').hasClass('lightSpeedIn')) {
            $('.form-callback').removeClass('lightSpeedIn');
          } else {
            $('.form-callback').addClass('lightSpeedIn');
          }
        }
      }
    });
  });

  $('#checkbox-input').click(function () {
    if ($(this).is(':checked')) {
      $('.btn-callback-js').removeAttr('disabled');
    } else {
      $('.btn-callback-js').attr('disabled', 'disabled');
    }
  });

})();
