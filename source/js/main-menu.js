'use strict';

(function () {

  let ESC_KEYCODE = 27,
    V = 0.3,
    body = document.querySelector('body'),
    burgerBtn = document.querySelector('.btn-open-menu-js'),
    menu = document.querySelector('.menu-js'),
    menuCloseBtn = document.querySelector('.btn-close-menu-js'),
    linkNav = document.querySelectorAll('[href^="#"]');

  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      body.classList.remove('modal-open');
      menu.classList.remove('main-menu--open');

      var w = window.pageYOffset;
      var hash = this.href.replace(/[^#]*(.*)/, '$1');
      var t = document.querySelector(hash).getBoundingClientRect().top;
      var start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        var progress = time - start;
        var r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));

        window.scrollTo(0, r);

        if (r != w + t) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash
        }
      }
    }, false);
  }


  function burgerBtnClickHandler() {
    menu.classList.add('main-menu--open');
    body.classList.add('modal-open');
  };

  function menuCloseBtnClickHandler() {
    menu.classList.remove('main-menu--open');
    body.classList.remove('modal-open');
  };

  function escPressHandler(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      menu.classList.remove('main-menu--open');
      body.classList.remove('modal-open');
    }
  };

  burgerBtn.addEventListener('click', burgerBtnClickHandler);
  menuCloseBtn.addEventListener('click', menuCloseBtnClickHandler);
  document.addEventListener('keydown', escPressHandler);

})();
