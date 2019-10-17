'use strict';

(function () {

  $(document).ready(function () {

    $('#callback, #form-feedback').submit(function () {
      $.ajax({
        type: 'POST',
        url: './mail.php',
        data: $('#callback, #form-feedback').serialize()
      }).done(function () {
        alert('Сообщение отправлено. Спасибо. Менеджер скоро с Вами свяжется.');
        setTimeout(function () {
          $('#callback, #form-feedback').trigger('reset');
          $('.popup-overlay').removeClass('popup-overlay--open');
        }, 1000);
      });
      return false;
    });
  });

})();
