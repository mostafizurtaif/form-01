// >> handles psedu-placeholder events
(function () {
  const formTexts = document.querySelectorAll('.form__text');

  formTexts.forEach((formText) => {
    formText.addEventListener('keyup', function () {
      if (formText.value !== '') {
        formText.classList.add('form__text--pseudo-placeholder-stay-put');
      } else {
        formText.classList.remove('form__text--pseudo-placeholder-stay-put');
      }
    });
  });
})();
// <<
