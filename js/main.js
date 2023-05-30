const $inputURL = document.querySelector('#url');
const $image = document.querySelector('img');
const $form = document.querySelector('form');

$inputURL.addEventListener('input', function (event) {
  event.preventDefault();
  $image.setAttribute('src', event.target.value);
});



$form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formValue = {};
  formValue += event.target.value;

});
